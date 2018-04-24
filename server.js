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
            res.status(200).json(message);
        })

});

app.get('/feed', (req, res) => {
    const messages =  messageModel.find(function (error, message){
        if(!messages) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        if (!error) {
            res.status(200).send(message);
        } else {
            res.status(500).send(error.message);
        }
    });
});

app.put('/feed/:id', (req, res) => {
    const message = messageModel.findOne({_id: req.query.id});
    if(!message) {
        res.statusCode = 404;
        console.log("error");
        return res.send({ error: 'Not found' });
    } else {
        return res.status(200).json(message);
    }
});

app.put('/feed/:id', (req, res) => {
   const Message = messageModel.findById(req.param._id, function (err, message){
       if(err) {
           res.send(err);
           console.log("error");
       }
       message.text = req.body.text;
       message.save((err) => {
            if(err) {
                res.send(err);
                console.log("error");
            }
           res.json({ message: 'Message updated!' });
            res.status(200).json(Message);
       });
   });
});

app.delete('feed/:id', (req, res) => {
   app.remove({_id: req.params._id}, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});