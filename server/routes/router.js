const express = require('express');
const route = express.Router();
//Express router (no app)

route.get('/', (req, res) => {
    res.redirect('/users');
})

route.get('/users', (req, res) => {
    res.render('users');
});

route.get('/users/create', (req, res) => {
    res.render('users/create');
});

module.exports = route;