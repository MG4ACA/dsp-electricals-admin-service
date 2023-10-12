const LoginService = require('../services/LoginService');

class LoginController {
  async getAllUsers(ctx) {
    try {
      const users = await LoginService.getAllUsers();
      ctx.body = users;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching users' };
    }
  }
}

module.exports = new LoginController();
