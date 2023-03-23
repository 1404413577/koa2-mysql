// 生产环境域名：http://172.17.201.27    开发环境域名：http://localhost
const host = "http://localhost";
// 生产环境端口：自定义   开发环境域名：9000  线上IP：6688
const port = 3000;
// 引入mysql
const mysql = require("mysql");

// 创建连接池
const pool = mysql.createPool({
    host: "localhost",  // 连接的服务器(代码托管到线上后，需改为内网IP，而非外网)
    port: 3306, // mysql服务运行的端口
    database: "koa2", // 选择某个数据库
    user: "root",   // 用户名
    password: "0519", // 用户密码
})

// 对数据库进行增删改查操作的基础
const query = (sql,callback) => {
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows)
            connection.release()
        })
    })
}

// 定义返回的固定格式
// message: 返回的信息   errCode: 0-成功，1-失败   data: 返回的数据，默认是空对象
const msgFormat = (errCode, message, data={}) => {
    return { errCode, message, data }
}

module.exports = {
    host, port, query, msgFormat
}