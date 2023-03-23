const Router = require("koa-router");
const login = new Router();
const bodyParser = require("koa-bodyparser");
const db = require("../utils/db");

// 查询
function searchUser(username) {
  return new Promise((resolve, reject) => {
    const sql = SearchDataSql("user", username);
    query(sql, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

login.post("/", async (ctx) => {
  let { username, password } = ctx.request.body;
  // 先检查user表是否有这个数据
  let result = await searchUser(username);

  // 账号不存在
  if (result.length === 0) {
    ctx.body = msgFormat(1, "该账号不存在");
    return;
  }

  // 密码错误
  if (result[0].password != password) {
    ctx.body = msgFormat(1, "账号或密码错误");
    return;
  }

  // 如果有这个用户，先把token生成
  await new Promise((resolve, reject) => {
    const sql = buildTokenSql(username, password);
    query(sql, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  // 生成完token，重新查询user表数据
  let result1 = await searchUser(username);

  let { player, avatar, token, editable } = result1[0];
  ctx.body = msgFormat(0, "登录成功", {
    username: result1[0].username,
    player,
    avatar,
    editable,
    "cms-token": token,
  });
});

module.exports = login;



