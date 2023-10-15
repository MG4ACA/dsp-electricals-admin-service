const { connectDB } = require('../db/dbConnection');
const Stock = require('../models/_stock');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

class StockService {
  async getAllStocks() {
    try {
      const stocks = await Stock.find();
      return stocks;
    } catch (error) {
      console.error('Error fetching stocks:', error);
      throw error;
    }
  }

  async saveStock(stock) {
    try {
      const newStock = new Stock(stock);

      const savedStock = await newStock.save();
      console.log('Stock saved:', savedStock);
      return savedStock;
    } catch (error) {
      console.error('Error saving stock:', error);
      throw error;
    }
  }

  async deleteStock(stockId) {
    try {
      const updatedStock = await Stock
        .findOneAndUpdate(
          { _id: new ObjectId(stockId) },
          { $set: { state: false } }        
          )

      if (updatedStock) {
        console.log('Stock state updated:', updatedStock);
      } else {
        console.log('Stock not found.');
      }
    } catch (error) {
      console.error('Error updating stock state:', error);
    }
  }
}
module.exports = new StockService();
