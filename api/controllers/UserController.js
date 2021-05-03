var User = require('../models').User;

module.exports.getAll = async function (req, res) {
    return User.findAll()
        .then(users => { res.status(200).send(users) })
        .catch(error => res.status(400).send("Error on get users!"));
}

module.exports.add = async function (req, res) {
    console.log(req.body)
    return User.create(req.body)
        .then(data => {
            console.log(req.body);
            res.status(200).send(data)
        })
        .catch(error => res.status(400).send("Error on add users!"));
}

module.exports.delete = async function (req, res) {
    const id = req.params.id;

    return User.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send("Success");
        } else {
            res.status(500).send("Error on delete user!");
        }
    }).catch(error => res.status(400).send("Error on delete user!"));
}


module.exports.update = async function (req, res) {
    const id = req.params.id;

    return User.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.status(200).send("Success");
        } else {
            res.status(500).send("Error on update user!");
        }
    }).catch(error => res.status(400).send("Error on update user!"));
}