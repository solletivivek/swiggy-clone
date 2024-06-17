const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/addProduct/:firmId', productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);
router.delete('/:productId', productController.deleteProductById);


router.get('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent = ('Content-Type', 'image/jpeg' );
    res.sendFile(path.join(__dirname, '..','uploads', imageName));
    
});

module.exports = router;