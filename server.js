const Koa = require('koa');
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require('./routes/routes');
const app = new Koa();
const port = 8001;

app.use(parser())
app.use(cors())
app.use(router.routes())

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


