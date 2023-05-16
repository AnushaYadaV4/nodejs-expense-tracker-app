const express = require('express');

const authActionsController = require('../controllers/auth');

const router = express.Router();

router.post('/addAuthDetails', authActionsController.postAddAuthDetails);

module.exports = router;