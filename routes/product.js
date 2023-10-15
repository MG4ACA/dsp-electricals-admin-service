const product = require('../controller/ProductController');

module.exports = (router) => {
  router.post('/api/product', product.saveProduct);

  router.get('/api/product', product.getAllProducts);

  router.delete('/api/product/:id', product.deleteProduct);
};