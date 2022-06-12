const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: new Date(),
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product