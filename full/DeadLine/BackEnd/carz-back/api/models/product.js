const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required: true},
    price: { type: Number, required: true},
    company: { type: String, required: true},
    parts: { type: String, required: true},
    productImage:{type: String}
});

module.exports = mongoose.model('Product', productSchema);