
var express = require('express');
var router = express.Router();
var authController = require('../controllers/AuthController');

router.post('/login', authController.login);
router.get('/users', authController.getUsers);


module.exports = router;
