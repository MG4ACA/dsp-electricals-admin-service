const ProductService = require('../services/ProductService');
const Response = require('../utils/response');
const { HttpResponse } = require('../const/responseCodes');

class LoginController {
  async getAllProducts(ctx) {
    try {
      const result = await ProductService.getAllProducts();

      return Response.success(ctx, {
        statusCode: HttpResponse.SUCCESS.OK.CODE,
        content: result,
      });
    } catch (error) {
      return Response.error(ctx, {
        statusCode: HttpResponse.SERVER_ERROR.INTERNAL_SERVER_ERROR.CODE,
        content: err.message,
      });
    }
  }

  async saveProduct(ctx) {
    try {
      const products = await ProductService.saveProduct(ctx.request.body);
      ctx.status = 200;
      ctx.body = products;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching users' };
    }
  }

  async deleteProduct(ctx) {
    try {
      const products = await ProductService.deleteProduct();
      ctx.body = products;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching users' };
    }
  }
}

module.exports = new LoginController();
