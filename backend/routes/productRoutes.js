const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/addProduct/:firmId', productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);

module.exports = router;