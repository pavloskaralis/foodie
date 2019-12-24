//Dependencies
const express = require('express');
const router = express.Router();
const List = require('../models/list.js');

//Routes
//returns all lists associated with client username
router.get('/:username', (req, res) => {
    List.find({users: {$in: [req.params.username]}})
    .then(lists => res.json(
        {username: req.params.username, 
            lists: lists
        }));
})

module.exports = router; 