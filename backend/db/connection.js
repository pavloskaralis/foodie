//Dependencies
const mongoose = require('mongoose');

//Environment
const db = mongoose.connection; 
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/foodie';

//Connect
mongoose.connect(mongoURI, {useNewUrlParser: true}), ()=> console.log('connected');

//Status
db.on('error', (err) => console.log(err.message));
db.on('disconnected', () => console.log('disconnected'));

mongoose.Promise = Promise;
module.exports = mongoose; 