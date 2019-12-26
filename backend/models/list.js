//Dependencies
const mongoose = require('../db/connection.js');

//Schema
const listSchema = new mongoose.Schema({
    users: [String],
    title: String,
    items: [{name: String, quantity: String}]
}, {timestamps: true});

const List = mongoose.model('Lists', listSchema);
module.exports = List;