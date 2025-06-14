const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productId: { type: String, unique: true },
    productName: String,
    productPrice: Number,
    entryDate: Date
});
module.exports = mongoose.model('Product', ProductSchema);
