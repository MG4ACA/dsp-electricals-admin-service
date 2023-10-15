const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  companyId: String,
  companyName: String,
  productId: String,
  productName: String,
  price: Number,
  qty: Number,
  description: String,
  addedDate: String,
  state: Boolean
},
{ collection: 'stock' });

const Stock = mongoose.model('stock', stockSchema);

module.exports = Stock;