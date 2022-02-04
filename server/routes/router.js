const express = require('express');
const route = express.Router();
//Express router (no app)

const services = require('../services/render');

route.get('/', (req, res) => {
    res.redirect('/users');
})

route.get('/users', services.indexRender);

route.get('/users/create', services.createRender);

module.exports = route;