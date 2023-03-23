// const db = require("./db")
//
// var arr = [
//     {id:1,img:'/images/头像.jpg'},
//     {id:2,img:'/images/新闻.jpg'},
//     {id:3,img:'/images/雾霾.jpg'},
// ]
//
// //对数组进行for循环
//
// arr.map(val=>{
//     let sql = `insert into banner values (${val.id}, "${val.img}")`
//     db.query(sql, (err, data)=>{
//         if(err) throw err;
//         console.log(data)
//     })
//
// })

// 添加数据
// const db = require('./db')
// const data = [
//     {id: 0, icon: '/images/subjectIcons1.png', title: "Java EE"},
//     {id: 1, icon: '/images/subjectIcons2.png', title: "全栈UI设计"},
//     {id: 2, icon: '/images/subjectIcons3.png', title: "H5前端"},
//     {id: 3, icon: '/images/subjectIcons4.png', title: "Python"},
//     {id: 4, icon: '/images/subjectIcons5.png', title: "iOS"},
//     {id: 5, icon: '/images/subjectIcons6.png', title: "大数据"},
//     {id: 6, icon: '/images/subjectIcons7.png', title: "C++"}
// ]

// data.map(val=>{
//     let sql = `INSERT INTO subject VALUES (${val.id}, '${val.icon}', '${val.title}')`;
//     db.query(sql, (err, data)=>{
//         if(err) console.log(err);
//         console.log(data)
//     })
// })

// // 给表zixun添加数据
// const db = require('./db')
// const data = [
//     {id: 0, icon: '/images/angular.gif', subtitle: "学会用 Angular 构建应用，把这些代码和能力复用在多种不同平台的应用上", title: "一套框架多种平台 移动端&桌面端"},
//     {id: 1, icon: '/images/vue.gif', subtitle: "不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩", title: "渐进式的JavaScript 框架"},
//     {id: 2, icon: '/images/react.gif', subtitle: "组件逻辑使用 JavaScript 编写而非模版，你可以轻松地在应用中传递数据，并使得状态与 DOM 分离", title: "用于构建用户界面的 JavaScript 库"},
// ]
//
// data.map(val=>{
//     let sql = `INSERT INTO zixun VALUES (${val.id}, '${val.title}', '${val.subtitle}', '${val.icon}')`;
//     db.query(sql, (err, data)=>{
//         if(err) console.log(err);
//         console.log(data)
//     })
// })
//
// const db = require('./db')
// const fs = require('fs')
//
// // 读取文件的函数
// function readFileFn(subject){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(`../assets/${subject}.txt`, (err, data)=>{
//             if(err) throw err;
//             resolve(data.toString())
//         })
//     })
// }
//
// let vueContent, reactContent, angularContent;
// var fn = async () => {
//     // 分别读取这几份txt文件
//     vueContent = await readFileFn('vue');
//     reactContent = await readFileFn('react');
//     angularContent = await readFileFn('angular');
//
//     let data = [
//         {id: 0, title: "一套框架多种平台 移动端&桌面端", author: "张三丰", date: "2013-03-22", imgUrl: "/images/dt.png", content: angularContent},
//         {id: 1, title: "渐进式的JavaScript 框架", author: "小鱼儿", date: "2014-04-23", imgUrl: "/images/dt.png", content: vueContent},
//         {id: 2, title: "一套框架多种平台 移动端&桌面端", author: "花无缺", date: "2015-05-24", imgUrl: "/images/dt.png", content: reactContent}
//     ]
//
//     data.map(val=>{
//         let sql = `INSERT INTO article VALUES (${val.id}, '${val.title}', '${val.author}', '${val.date}', '${val.imgUrl}', '${val.content}')`;
//         db.query(sql, (err, data)=>{
//             if(err) console.log(err);
//             console.log(data)
//         })
//     })
// }
// fn();

// // 添加数据
// const db = require('./db')
// const data = [
//     {id: 0, imgUrl: '/images/banner1.png'},
//     {id: 1, imgUrl: '/images/banner2.png'},
//     {id: 2, imgUrl: '/images/banner3.png'}
// ]
//
// data.map(val=>{
// 	  // 这里记住，如果是字符串，必须在变量外层套一个引号，否则会出现sql语句报错
//     let sql = `INSERT INTO banner VALUES (${val.id}, '${val.imgUrl}')`;
//     db.query(sql, (err, data)=>{
//         if(err) console.log(err);
//         console.log(data)
//     })
// })
//
//
//
// 添加数据
// const db = require('./db')
// const data = [
//     {id: 0, icon: '/images/subjectIcons1.png', title: "Java EE"},
//     {id: 1, icon: '/images/subjectIcons2.png', title: "全栈UI设计"},
//     {id: 2, icon: '/images/subjectIcons3.png', title: "H5前端"},
//     {id: 3, icon: '/images/subjectIcons4.png', title: "Python"},
//     {id: 4, icon: '/images/subjectIcons5.png', title: "iOS"},
//     {id: 5, icon: '/images/subjectIcons6.png', title: "大数据"},
//     {id: 6, icon: '/images/subjectIcons7.png', title: "C++"},
//     {id: 7, icon: '/images/subjectIcons8.png', title: "javaweb"}
// ]

// data.map(val=>{
//     let sql = `INSERT INTO subject VALUES (${val.id}, '${val.icon}', '${val.title}')`;
//     db.query(sql, (err, data)=>{
//         if(err) console.log(err);
//         console.log(data)
//     })
// })

// 添加数据
// const db = require("./db");
// const data = [{ id: 6, name: "js", date: "2022-11-19", prince: 56, num: 1 }];

// data.map((val) => {
//   let sql = `INSERT INTO book VALUES (${val.id}, '${val.name}', '${val.date}','${val.prince}','${val.num}')`;
//   db.query(sql, (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   });
// });
