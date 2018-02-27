const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(logger('dev'));
app.listen(3000,  () => {
    console.log('Example app listening on port 3000!')
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/login', (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(200).json(user);
});
