//Dependencies
const express = require('express');
const router = express.Router();
const List = require('../models/list.js');

//Routes
router.get('/:username', (req, res) => {
    res.send('test')
})

module.exports = router; 