const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const firmController = require('../controllers/firmController');

// Correct usage of middleware in router
router.use(verifyToken);

// Routes
router.post('/add-firm', firmController.addFirm);

module.exports = router;
