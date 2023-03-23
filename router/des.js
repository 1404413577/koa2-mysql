const Router = require("koa-router");
const des = new Router();
// const db = require("../utils/db")
const { query, msgFormat } = require("./utils")

// 获取分类信息
const desFn = () => {
	return new Promise((resolve, reject) => {
	  const sql = `select * from des`;
	  query(sql, (err, data) => {
		if (err) reject(err);
		resolve(data);
	  });
	});
  };
  
  des.get("/", async (ctx) => {
	let des = await desFn(ctx.request.query.id);
	ctx.body = msgFormat(0, "分类请求成功", des);
  });
  

module.exports = des;