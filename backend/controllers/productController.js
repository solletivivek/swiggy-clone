const Product = require('../models/Product');
const Firm = require('../models/Firm');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const addProduct = async (req, res) => {
    try {
        const { productName, price, category, bestSeller, description } = req.body;
        const image = req.file ? req.file.filename : undefined;

        const firmId = req.params.firmId;
        const firm = await Firm.findById(firmId);

        if (!firm) {
            return res.status(404).json({ status: 'failed', message: 'Firm not found' });
        }

        const product = new Product({
            productName,
            price,
            category,
            bestSeller,
            description,
            image,
            firm: firmId
        });

        const savedProduct = await product.save();

        // Check if firm.products is an array before pushing
        if (!Array.isArray(firm.products)) {
            firm.products = [];
        }

        firm.products.push(savedProduct);
        await firm.save();

        return res.status(201).json({ status: 'success', message: 'Product added successfully' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'failed', message: 'Server error' });
    }
};

module.exports = { addProduct: [upload.single('image'), addProduct] };
