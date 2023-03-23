const Router = require("koa-router");
const questions = new Router();
const db = require("../utils/db");

questions.get("/", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let sqlLang = `select * from questions`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});

module.exports = questions;
