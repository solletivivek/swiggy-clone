const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    category: {
        type: [{
            type: String,
            enum: ['veg', 'non-veg'], 
        }]
    },
    image:{
        type: String
    },
    bestSeller:{
        type: Boolean, 
    },
    description:{
        type: String,
    },
    firm:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Firm'
        }
    ]
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
module.exports = Product;