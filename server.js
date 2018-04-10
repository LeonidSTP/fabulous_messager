const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //ORM allow access to MongoDB
const config = require('./config/config');
const jwt = require('jsonwebtoken');
const app = express();
const jwtconf = require('./jwt');
const userModel = require('./models/user');
const bcrypt = require('bcrypt'); //crypto lib

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

const auth = require('./methods/auth');


db.on('error', (err) => {
});
db.once('open', () => {
});

app.set('superSecret', jwtconf.secret); // secret variable


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
auth(app);


app.use(function (req, res, next) {
    console.log('Middleware');
    next()
});







