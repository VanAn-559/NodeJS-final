const express = require('express');
const router = express.Router();

const usersController = require('../app/controllers/usersController');
router.post('/register',usersController.uregisterPost);
router.post('/login', usersController.post);
router.get('/register', usersController.uregister);
router.get('/login', usersController.users);

module.exports = router;