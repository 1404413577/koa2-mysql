const Koa = require("koa2");
const { body } = require("koa2/lib/response");
const router = require("./router/index");
const cors = require("koa2-cors");

// 引入
const path = require("path");
const static = require("koa-static");
const app = new Koa();
const port = 3000;
const bodyParser = require('koa-bodyparser');
router.get("/", async (ctx) => {
  ctx.body = "首页";
});



// 匹配不到页面的全部跳转去404
// app.use(async (ctx, next) => {
//     await next();
//     if (parseInt(ctx.status) === 404) {
//         ctx.response.redirect("/404")
//     }
// })





// 获取静态资源文件夹
app.use(static(path.join(__dirname + "/assets")));
// 调用静态资源文件
app.use(static(path.join(__dirname, "/assets/images")));


//跨域
app.use(cors());

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});
app.use(bodyParser());

//统异常处理
const errorHandler = require("./utils/errorHandler.js");
app.use(router.routes(), router.allowedMethods());
errorHandler(app);

app.listen(port, () => {
  console.log("服务开启: http://localhost:" + port);
});
