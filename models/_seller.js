const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  company: String,
  name: String,
  contact: String,
  address: String,
  description: String,
  addedDate: String,
  state: Boolean
},
{ collection: 'seller' });

const Seller = mongoose.model('seller', sellerSchema);

module.exports = Seller;