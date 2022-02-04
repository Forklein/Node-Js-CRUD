const axios = require('axios');

exports.indexRender = (req, res) => {
    res.render('users', { users: });
};

exports.createRender = (req, res) => {
    res.render('users/create');
}