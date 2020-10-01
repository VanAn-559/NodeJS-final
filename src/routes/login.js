const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
router.get('/users/register', loginController.register);
router.get('/users/login', loginController.login);
router.get('/', loginController.welcom);

module.exports = router;