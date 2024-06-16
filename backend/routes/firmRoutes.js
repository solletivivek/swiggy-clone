const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const firmController = require('../controllers/firmController');

router.use(verifyToken);

router.post('/add-firm', firmController.addFirm);

module.exports = router;
