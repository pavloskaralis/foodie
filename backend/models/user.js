//Dependencies
const mongoose = require('../db/connection.js');

//Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
}, {timestamps: true});

const User = mongoose.model('Users', userSchema);
module.exports = User;