const axios = require('axios');

const getAllUsers = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/users');
        return res.data;
        return res;
    } catch (error) {
        console.log(error);
    }
}

exports.indexRender = (req, res) => {
    res.render('users', { users: getAllUsers() });
};

exports.createRender = (req, res) => {
    res.render('users/create');
}