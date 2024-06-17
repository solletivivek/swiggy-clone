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


const getProductByFirm = async (req, res) => {
    try {
        const firmId = req.params.firmId;
        const firm = await Firm.findById(firmId);
        if(!firm){
            return res.status(404).json({ status: 'failed', message: 'Firm not found' });
        }
        const restaurantName = firm.firmName;
        const products = await Product.find({ firm});

        res.status(200).json({ status: 'success',restaurantName, products });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'failed', message: 'Server error' });
    }
}
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

const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deleteProduct = await Product.findByIdAndDelete(productId);
        if (!deleteProduct) {
            return res.status(404).json({ status: 'failed', message: 'Product not found' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'failed', message: 'Server error' });
    }
}

// const updateProductById = async (req, res) => {
//     try {
//         const productId = req.params.productId;
//         const product = await Product.findById

//         (productId);
//         if (!product) {
//             return res.status(404).json({ status: 'failed', message: 'Product not found' });
//         }
//         const { productName, price, category, bestSeller, description } = req.body;
//         const image = req.file ? req.file.filename : product.image;

//         product.productName = productName;
//         product.price = price;

//         product.category = category;
//         product.bestSeller = bestSeller;
//         product.description = description;
//         product.image = image;

//         await product.save();

//         return res.status(200).json({ status: 'success', message: 'Product updated successfully' });
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(500).json({ status: 'failed', message: 'Server error' });
//     }
// }

// module.exports = { addProduct: [upload.single('image'), addProduct], getProductByFirm, deleteProductById, updateProductById };

module.exports = { addProduct: [upload.single('image'), addProduct] , getProductByFirm,deleteProductById };