const login = require('../controller/LoginController');

module.exports = (router) => {
  router.get('/api/users', login.getAllUsers);
};
