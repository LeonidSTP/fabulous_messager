const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //ORM allow access to MongoDB
const config = require('./config/config');
const app = express();


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
const messageModel = require('./models/message');

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

app.post('/login', (req, res) => {

    const user = new userModel(req.body);
    user.save((error, createdUser) => {
        if (error) {
            res.send(500, error.message)
        }
        res.status(200).json(createdUser);
    });
});

app.post('/register', (req, res) => {
    if(!req.body.userName){
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

app.post('/message', (req, res) => {
    console.log(req.body);
    const message = new messageModel(req.body);
    console.log(message);
    message.save((error, createdMessage) => {
            if (error) {
                res.status(500).send(error.message)
            }

            console.log('new message -> ', createdMessage);
            res.status(200).json('ok');
        })

});

app.get('/feed', (req, res) => {
    const messages =  messageModel.find(function (error, message) {
        if(!messages) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        if (!error) {
            res.json({success: true, message: 'Enjoy your message!', messages: message});
        } else {
            res.status(500).send(error.message);
        }
    });
});