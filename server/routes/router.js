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

route.get('/users/:id', services.showRender);

route.get('/users/:id/edit/', services.editRender);

//API

// route.get('/api/users', userController.find);
route.post('/api/users/create', userController.create);
route.patch('/api/users/:id', userController.update);
route.delete('/api/users/:id', userController.delete);

module.exports = route;