const Router = require("koa-router");
const article = new Router();
const db = require("../utils/db");
const { query, msgFormat } = require("./utils");
const bodyParser = require("koa-bodyparser");
article.use(bodyParser());

// 通过参数id获取文章详情列表
article.get("/", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    //  将参数id转换为数字类型
    let id = Number(ctx.query.id);
    let sqlLang = `SELECT * FROM article WHERE id=${id}`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = {
    code: 200,
    msg: "搜索成功",
    data: data,
  };
});

// 添加加文章
article.post("/add", async (ctx) => {
  const res = ctx.request.body;
  const { author, title, pages, dates } = res.params;
  const sql = `INSERT INTO article ( author, title, pages, dates) VALUES ('${author}','${title}','${pages}','${dates}')`;
  query(sql, (err, data) => {
    if (err) {
      ctx.body = msgFormat(1, "文章添加失败", err);
    } else {
      ctx.body = msgFormat(200, "文章添加成功", data);
    }
  });
});

// 删除文章
article.post("/del", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    const res = ctx.request.body;
    // 解构赋值
    let id = res.params.id;
    console.log(id);
    let sqlLang = `DELETE FROM article WHERE id=${id}`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = {
    code: 200,
    msg: "搜索成功",
    data: data,
  };
});

// 修改文章
article.post("/update", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    const res = ctx.request.body;
    // 解构赋值
    let { id, author, title, pages, dates } = res.params;
    let sqlLang = `UPDATE article SET author='${author}',title='${title}',pages='${pages}',dates='${dates}' WHERE id=${id}`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = {
    code: 200,
    msg: "修改成功",
    data: data,
  };
});

//搜索文章
article.post("/search", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    const res = ctx.request.body;
    // 解构赋值
    let { title, author, type, creatTime } = res.params;
    let sqlLang = `SELECT * FROM article WHERE title LIKE '%${title}%' AND author LIKE '%${author}%' AND type LIKE '%${type}%' AND creatTime LIKE '%${creatTime}%'`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = {
    code: 200,
    msg: "搜索成功",
    data: data,
  };
});

// 分页，每次获取5条数据
article.post("/page", async (ctx) => {
  const res = ctx.request.body;
  const { page } = res.params;
  const sql = `SELECT * FROM article LIMIT ${(page - 1) * 5},5`;

  db.query(sql, (err, data) => {
    if (err) {
      ctx.body = msgFormat(1, "文章获取失败", err);
    } else {
      ctx.body = msgFormat(200, "文章获取成功", data);
    }
  });
  ctx.body = {
    code: 200,
    msg: "搜索成功",
    data: data,
  };
});
module.exports = article;
