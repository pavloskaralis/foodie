//Dependencies
const express = require('express');
const cors = require('cors');
const passport = require('./config/passport')();

//Environment 
const app = express(); 
const port = process.env.PORT || 8090; 

//Middleware
app.use(cors()); 
app.use(express.urlencoded({extended: false}, {limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(passport.initialize());

//Controllers
const listController = require('./controllers/list.js');
app.use('/list', listController);
const userController = require('./controllers/user.js');
app.use('/user', userController);

//Listen
app.listen(port, () => console.log('listening'));
