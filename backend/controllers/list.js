//Dependencies
const express = require('express');
const router = express.Router();
const List = require('../models/list.js');

//Routes
//returns all lists associated with client username (index page)
router.get('/user/:username', (req, res) => {
    List.find({users: {$in: [req.params.username]}})
    .then(lists => res.json(
        {username: req.params.username, 
            lists: lists
        }));
})

//returns specific list based on id (show page)
router.get('/id/:listID', (req, res) => {
    List.findById(req.params.listID)
    .then(list => res.json({list: list}));
})

module.exports = router; 