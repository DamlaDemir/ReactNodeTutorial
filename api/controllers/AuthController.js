var User = require('../models').User;

module.exports.login = function (req, res) {
    console.log(req);
    console.log(req.body.username);
    console.log(req.body.password);
}


module.exports.getUsers = async function (req, res) {
    // console.log(db);
    User.findAll().then(users => {
        console.log("success");
        console.log(users);
        res.status(200).send(users)
    })
        .catch(error => {
            console.log("error");
            console.log(error);
            res.status(400).send(error)
        });
    // await Models.Users.findAll().then(data => {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // })
}