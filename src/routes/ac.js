const express = require('express');
const router = express.Router();

const acController = require('../app/controllers/AcController');
router.get('/account/create', acController.storeCreate);

module.exports = router;