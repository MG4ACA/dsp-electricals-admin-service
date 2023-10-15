const seller = require('../controller/SellerController');

module.exports = (router) => {
  router.post('/api/seller', seller.saveSeller);

  router.get('/api/seller', seller.getAllSellers);

  router.delete('/api/seller/:id', seller.deleteSeller);
};