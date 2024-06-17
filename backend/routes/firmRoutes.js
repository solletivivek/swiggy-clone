const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const firmController = require('../controllers/firmController');

router.use(verifyToken);

router.post('/add-firm', firmController.addFirm);
router.delete('/:firmId', firmController.deleteFirmById);



router.get('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent = ('Content-Type', 'image/jpeg' );
    res.sendFile(path.join(__dirname, '..','uploads', imageName));
    
});

module.exports = router;
