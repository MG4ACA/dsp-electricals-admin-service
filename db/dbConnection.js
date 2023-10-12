const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/dsp_electricals';
const client = new MongoClient(uri);

const connectDB = async () => {
  console.log('Connecting to MongoDB');
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected!');
    return true;
  } catch (err) {
    console.log('Failed to connect to MongoDB', err);
    return false;
  }
};

module.exports = { connectDB };
