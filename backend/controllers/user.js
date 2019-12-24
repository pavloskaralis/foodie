//Dependencies
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const config = require('../config/config.js');
const User = require('../models/user.js');

router.get('/verify/:token', (req, res) => {
    const ca = req.params.token;
    const base64Url = ca.split('.')[1];
    const buff = new Buffer(base64Url, 'base64');
    const text = buff.toString('ascii');
    const payload = JSON.parse(text).id;
    User.findById(payload) 
    .then(user => res.json({username: user.username}))
})

router.post('/signup', (req, res) => {
    if (req.body.username && req.body.password) {
        let newUser = {
            username: req.body.username,
            password: req.body.password
        }
        User.findOne({username: req.body.username})
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                const payload = {
                                    id: user.id
                                }
                                const token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})

router.post('/login', (req, res) => {
    if (req.body.username && req.body.password) {
    User.findOne({username: req.body.username}).then(user => {
        if (user) {
            if (user.password === req.body.password) {
                var payload = {
                    id: user.id
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token
                })
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(401)
        }
    })
    } else {
        res.sendStatus(401)
    }
})

module.exports = router; 