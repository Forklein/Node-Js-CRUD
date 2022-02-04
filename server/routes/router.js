const express = require('express');
const route = express.Router();
//Express router (no app)

const services = require('../services/render');
const userController = require('../controller/userController');

route.get('/', (req, res) => {
    res.redirect('/users');
})

route.get('/users', services.indexRender);

route.get('/users/create', services.createRender);

//API

route.post('/api/users/create', userController.create);

module.exports = route;