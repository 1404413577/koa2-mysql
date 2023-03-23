const Router = require("koa-router");
const user = new Router();
// const db = require("../utils/db")
const { query, msgFormat } = require("./utils")

// 获取分类信息
const desFn = () => {
	return new Promise((resolve, reject) => {
	  const sql = `select * from user`;
	  query(sql, (err, data) => {
		if (err) reject(err);
		resolve(data);
	  });
	});
  };
  
  user.get("/", async (ctx) => {
	let user = await desFn(ctx.request.query.id);
	ctx.body = msgFormat(0, "分类请求成功",user);
  });
  

module.exports = user;