var router = require('express').Router();
var userController = require('../controllers/UserController');

router.get('/getAll', userController.getAll);
router.post('/add', userController.add);
router.delete('/delete:id', userController.delete);
router.put('/update:id', userController.update);


module.exports = router;