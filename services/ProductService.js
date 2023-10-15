const { connectDB } = require('../db/dbConnection');
const Product = require('../models/_product');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

class ProductService {
  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async saveProduct(product) {
    try {
      const newProduct = new Product(product);

      const savedProduct = await newProduct.save();
      console.log('Product saved:', savedProduct);
      return savedProduct;
    } catch (error) {
      console.error('Error saving product:', error);
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const updatedProduct = await Product
        .findOneAndUpdate(
          { _id: new ObjectId(productId) },
          { $set: { state: false } }        
          )

      if (updatedProduct) {
        console.log('Product state updated:', updatedProduct);
      } else {
        console.log('Product not found.');
      }
    } catch (error) {
      console.error('Error updating product state:', error);
    }
  }
}
module.exports = new ProductService();
