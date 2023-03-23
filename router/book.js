const Router = require("koa-router");
const book = new Router();
const bodyParser = require("koa-bodyparser");
const db = require("../utils/db");

book.use(bodyParser());

// 获取
book.get("/", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let sqlLang = `select * from book`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});

// 添加
book.post("/add", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let id = ctx.request.body.id;
    let name = ctx.request.body.name;
    let date = ctx.request.body.date;
    let prince = ctx.request.body.prince;
    let num = ctx.request.body.num;
    let sqlLang = `INSERT INTO book (id,name,date,prince,num) VALUES (${id}, '${name}', '${date}', '${prince}', '${num}')`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});



// 删除
book.post("/del", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let id = ctx.request.body.id;
    let sqlLang = `delete FROM book WHERE id=${id} `;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});

// 更新
book.post("/update", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let id = ctx.request.body.id;
    let name = ctx.request.body.name;
    let date = ctx.request.body.date;
    let prince = ctx.request.body.prince;
    let num = ctx.request.body.num;
    let sqlLang = `UPDATE book SET name=${name}, date =${date}, prince=${prince}, num=${num} WHERE id=${id}`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});

module.exports = book;
