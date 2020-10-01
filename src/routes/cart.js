const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/CartController');
router.post('/checkout', cartController.post);
router.get('/checkout', cartController.checkOut);
router.get('/order', cartController.order);
router.get('/', cartController.cart);

module.exports = router;
