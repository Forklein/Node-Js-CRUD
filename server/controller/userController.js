const Userdb = require('../model/User');

//create and save a new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(404).send({ message: 'Body is empty' })
        return
    }
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    user
        .save(user)
        .then(data => {
            // res.send(data);
            res.redirect('/users');
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Something went wrong' })
        })
}

exports.find = async (req, res) => {
    const users = Userdb.find();
    const response = await users;
    return res.send(response);
}

exports.update = (req, res) => {

}

exports.delete = async (req, res) => {
    try {
        const user = await Userdb.findById(req.params.id);
        if (user) {
            user.delete();
            res.status(200).send({ message: 'Delete successfully' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message || 'Something went wrong' })
    }
}