const jwtconf = require('../jwt');
const userModel = require('../models/user');
const bcrypt = require('bcrypt'); //cryptolib
const jwt = require('jsonwebtoken');

module.exports =  (app) => {

    app.post('/register', (req, res) => {
        if (!req.body.userName) {
            res.status(500).send("UserName not provided");
        }

        const user = new userModel(req.body);

        user.save((error, createdUser) => {
            if (error) {
                res.send(500, error.message)
            }
            res.status(200).json(createdUser);
        });
    });

    app.get('/users', protectRoute,  function (req, res) {
        console.log('Test');
        userModel.find({}, function (err, user) {
            res.json(user);
        });
    });

    app.post('/login', function (req, res) {
        // find the user
        userModel.findOne({email: req.body.email}, function (err, user) {

            if (err) throw err;

            if (!user) {
                res.json({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {
                // check if password matches
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    // if user is found and password is right
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = {
                        userName: user.userName
                    };
                    const token = jwt.sign(payload, app.get('superSecret'), {
                        expiresIn: '24h' // expires in 24 hours
                    });
                    // return the information including token as JSON
                    res.json({
                        token
                    });


                } else {
                    res.json({success: false, message: 'Authentication failed. Wrong password.'});
                }
            }

        });
    });

 function protectRoute(req, res, next) {

        // check header or url parameters or post parameters for token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({success: false, message: 'Failed to authenticate token.'});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;

                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    };

}
