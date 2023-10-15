const SellerService = require('../services/SellerService');
const Response = require('../utils/response');
const { HttpResponse } = require('../const/responseCodes');

class SellerController {
  async getAllSellers(ctx) {
    try {
      const result = await SellerService.getAllSellers();

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

  async saveSeller(ctx) {
    try {
      const sellers = await SellerService.saveSeller(ctx.request.body);
      ctx.status = 200;
      ctx.body = sellers;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching sellers' };
    }
  }

  async deleteSeller(ctx) {
    try {
      const sellers = await SellerService.deleteSeller();
      ctx.body = sellers;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching sellers' };
    }
  }
}

module.exports = new SellerController();
