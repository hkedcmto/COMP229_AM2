const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    //created: Date,
    //updated: Date
    created: {
        type: Date,
        default: Date.now // Automatically set the created date to the current date
    },
    updated: {
        type: Date,
        default: Date.now // Set updated date to the current date as well
    }
});

module.exports = mongoose.model('User', UserSchema);