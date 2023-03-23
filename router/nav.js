const Router = require("koa-router");
const nav = new Router();
const db = require("../utils/db")

nav.get('/', async (ctx) => {
		let data = await new Promise((resolve, reject)=>{
			let sqlLang = `select * from nav`;
			db.query(sqlLang, (err, data)=>{
				if(err) reject(err);
				resolve(data);	// 返回拿到的数据
			})
		})
		ctx.body = data;
	})

module.exports = nav;