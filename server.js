const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //ORM allow access to MongoDB
const config = require('./config/config');
const jwt = require('jsonwebtoken');
const app = express();
const jwtconf = require('./jwt');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
//Set up default mongoose connection
mongoose.connect(config.mongoUrl);
//Get the default connection
const db = mongoose.connection;
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


db.on('error', (err) => {
});
db.once('open', () => {
});

const userModel = require('./models/user');

app.use(logger('dev'));
app.listen(3000, () => {
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


app.use(function (req, res, next) {
    console.log('Middleware');
    next()
});


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

app.get('/users', function (req, res) {
    console.log('Test');
    userModel.find({}, function (err, user) {
        res.json(user);
    });
});

app.set('superSecret', jwtconf.secret); // secret variable


app.post('/login', function (req, res) {
    console.log(req.body);
    // find the user
    userModel.findOne({email: req.body.email}, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {
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
                    success: true,
                    message: 'Enjoy your token!',
                    token
                });
            }
        }

    });
});


// app.use(function(req, res, next) {
//
//   // check header or url parameters or post parameters for token
//   const token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//   // decode token
//   if (token) {
//
//     // verifies secret and checks exp
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//
//         next();
//       }
//     });
//
//   } else {
//
//     // if there is no token
//     // return an error
//     return res.status(403).send({
//         success: false,
//         message: 'No token provided.'
//     });
//
//   }
// });


