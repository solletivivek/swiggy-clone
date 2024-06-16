const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const firmSchema = new Schema({
    firmName: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true,
    },
    category: {
        type: [{
            type: String,
            enum: ['veg', 'non-veg'],
            required: true
        }]
    },
    region: {
        type: [{
            type: String,
            enum: ['north-indian', 'south-indian', 'chinese', 'bakery', 'fast-food', 'beverages', 'desserts', 'others'],
            required: true
        }]
    },
    offer: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    vendor: [{
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    }]
});

const Firm = mongoose.models.Firm || mongoose.model('Firm', firmSchema);
module.exports = Firm;
