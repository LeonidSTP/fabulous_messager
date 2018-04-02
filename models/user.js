const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); //crypto lib
const saltRounds = 10;

//defa
const userModel = new Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

 userModel.pre('save', function (next) {
    const self = this;
    self.password = bcrypt.hashSync(self.password, saltRounds);

    next();
 });


module.exports = mongoose.model('Users', userModel);
