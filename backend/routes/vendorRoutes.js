const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

// Define the route for vendor registration
router.post('/register', vendorController.vendorRegister);
router.post('/login', vendorController.vendorLogin);

module.exports = router;
