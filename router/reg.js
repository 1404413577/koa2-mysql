const Router = require("koa-router");
const login = new Router();
const bodyParser = require("koa-bodyparser");
const db = require("../utils/db");
const jwt = require("jsonwebtoken");
login.use(bodyParser());
// 登录接口 如果没有账号则注册
login.post("/login", async (ctx) => {
  const params = ctx.request.body;
  const { account, pwd } = params;
  let sql = `SELECT * FROM users WHERE account='${account}'`;
  let result = await new Promise((resolve, reject) => {
    db.query(sqlLang, (err, data) => {
      // 判断数据库是否有该账号
      if (err) reject(err);
      if (data.length > 0) {
        resolve(data);
      } else {
        resolve(false);
      }
    });
  });
  // 如果能找到对应的账号
  if (result) {
    // 如果账号密码正确，返回token 否则返回错误
    if (result[0].pwd == pwd) {
      ctx.body = {
        token: result[0],
        msg: "登录成功",
        account: account,
      };
    } else {
      ctx.body = {
        msg: "密码错误",
        account: account,
      };
    }
  } else {
    // 如果数据库没有该账号，则注册并生成token
    let result1 = await new Promise((resolve, reject) => {
      // 生成token

      const token = result[0].token;
      //   返回到数据库
      db.query(
        `UPDATE users SET token='${token}' WHERE account='${account}'`,
        (error, datas) => {
          if (error) throw error;
          // 已插入数据，返回用户名与token
          let obj = {
            token,
            msg: "登录成功",
            account: account,
          };
          resolve(obj);
        }
      );
    });
    // 返回result1状态
    if (result1) {
      ctx.body = result1;
    }
  }
});
module.exports = login;
