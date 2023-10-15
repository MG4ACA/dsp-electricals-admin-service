const StockService = require('../services/StockService');
const Response = require('../utils/response');
const { HttpResponse } = require('../const/responseCodes');

class StockController {
  async getAllStocks(ctx) {
    try {
      const result = await StockService.getAllStocks();

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

  async saveStock(ctx) {
    try {
      const stocks = await StockService.saveStock(ctx.request.body);
      ctx.status = 200;
      ctx.body = stocks;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching stocks' };
    }
  }

  async deleteStock(ctx) {
    try {
      const stocks = await StockService.deleteStock();
      ctx.body = stocks;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: 'Error fetching stocks' };
    }
  }
}

module.exports = new StockController();
