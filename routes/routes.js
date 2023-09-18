const Router = require("koa-router");
const router = new Router();

router.get("/test-url", (ctx) => (ctx.body = "Hello DSP Electrical!"));

module.exports = router;