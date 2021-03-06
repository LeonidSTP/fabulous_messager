const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageModel = new Schema({
    file: {
      type: String,
        required: false
    },
    dateMessage: {
        type: Date
    },
    text: {
      type: String,
      required: true
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    },
    Islike: {
        type: Boolean
    },
    Dislike:{
        type: Boolean
    }



});

module.exports = mongoose.model('Messages', messageModel);
