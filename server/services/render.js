// const axios = require('axios');

// const getAllUsers = async () => {
//     try {
//         const res = await axios.get('http://localhost:3000/api/users');
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

const Userdb = require('../model/User');


exports.indexRender = async (req, res) => {
    const users = Userdb.find();
    const response = await users;
    res.render('users/index', { users: response });
};

exports.createRender = (req, res) => {
    res.render('users/create');
}

exports.showRender = async (req, res) => {
    const user = Userdb.findById(req.params.id);
    const response = await user;
    res.render('users/show', { user: response });
}