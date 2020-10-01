const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController.js');
router.get('/:id/edit', customerController.edit);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.post('/create', customerController.paymen);
router.get('/:id', customerController.inpost);
router.get('/', customerController.inpost);

module.exports = router;
