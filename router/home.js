const Router = require("koa-router");
const home = new Router();
const db = require("../utils/db.js")


// home.get('/', async (ctx) => {
//     ctx.body = "首页";
// })

// 页面底部外链
home.get('/', async (ctx) => {
		let data = await new Promise((resolve, reject)=>{
			let sqlLang = `select * from users`;
			db.query(sqlLang, (err, data)=>{
				if(err) reject(err);
				resolve(data);	// 返回拿到的数据
			})
		})
		ctx.body = data;
	})


module.exports = home;