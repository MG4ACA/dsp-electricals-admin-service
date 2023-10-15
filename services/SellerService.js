const { connectDB } = require('../db/dbConnection');
const Seller = require('../models/_seller');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

class SellerService {
  async getAllSellers() {
    try {
      const sellers = await Seller.find();
      return sellers;
    } catch (error) {
      console.error('Error fetching sellers:', error);
      throw error;
    }
  }

  async saveSeller(seller) {
    try {
      const newSeller = new Seller(seller);

      const savedSeller = await newSeller.save();
      console.log('Seller saved:', savedSeller);
      return savedSeller;
    } catch (error) {
      console.error('Error saving seller:', error);
      throw error;
    }
  }

  async deleteSeller(sellerId) {
    try {
      const updatedSeller = await Seller
        .findOneAndUpdate(
          { _id: new ObjectId(sellerId) },
          { $set: { state: false } }        
          )

      if (updatedSeller) {
        console.log('Seller state updated:', updatedSeller);
      } else {
        console.log('Seller not found.');
      }
    } catch (error) {
      console.error('Error updating seller state:', error);
    }
  }
}
module.exports = new SellerService();
