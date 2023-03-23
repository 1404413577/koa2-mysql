const Router = require("koa-router");
const banner = new Router();
const db = require("../utils/db")

banner.get('/', async (ctx) => {
		let data = await new Promise((resolve, reject)=>{
			let sqlLang = `select * from banner`;
			db.query(sqlLang, (err, data)=>{
				if(err) reject(err);
				resolve(data);	// 返回拿到的数据
			})
		})
		ctx.body = data;
	})

module.exports = banner;