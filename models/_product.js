const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  code: String,
  name: String,
  description: String,
  addedDate: String,
  state: Boolean
},
{ collection: 'product' });

const Product = mongoose.model('product', productSchema);

module.exports = Product;