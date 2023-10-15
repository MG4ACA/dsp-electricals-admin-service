const Koa = require('koa');
const parser = require('koa-bodyparser');
const cors = require('@koa/cors');
const { connectDB } = require('./db/dbConnection');
const Router = require('koa-router');
const router = new Router();

require('./routes/user')(router);
require('./routes/product')(router);
require('./routes/seller')(router);
require('./routes/stock')(router);

async function main() {
  const app = new Koa();
  const port = 8001;

  app
  .use(parser())
  .use(cors())
  .use(router.routes());

  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
