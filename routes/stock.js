const stock = require('../controller/StockController');

module.exports = (router) => {
  router.post('/api/stock', stock.saveStock);

  router.get('/api/stock', stock.getAllStocks);

  router.delete('/api/stock/:id', stock.deleteStock);
};