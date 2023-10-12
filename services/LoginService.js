const { connectDB } = require('../db/dbConnection');
const User = require('../models/_user');

class LoginService {
  async getAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}

module.exports = new LoginService();
