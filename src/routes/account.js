const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/AccountController.js');
router.get('/:id/editAccount', accountController.editAccount);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);
router.post('/create', accountController.paymenAccount);
router.get('/:id', accountController.inpostAccount);
router.get('/', accountController.inpostAccount);

module.exports = router;