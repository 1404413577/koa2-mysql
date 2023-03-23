const Router = require("koa-router");
const router = new Router();
const home = require("./home");
const list = require("./list");
const login = require("./login");
const book = require("./book");
const user = require("./user");
const banner = require("./banner");
const nav = require("./nav");
const article = require("./article");
const des = require("./des");
const questions = require("./questions");


router.use("/home", home.routes(), home.allowedMethods());
router.use("/list", list.routes(), list.allowedMethods());
router.use("/login", login.routes(), login.allowedMethods());
router.use("/book", book.routes(), book.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());
router.use("/banner", banner.routes(), banner.allowedMethods());
router.use("/nav", nav.routes(), nav.allowedMethods());
router.use("/article", article.routes(), article.allowedMethods());
router.use("/des", des.routes(), des.allowedMethods());
router.use("/questions", questions.routes(), questions.allowedMethods());

router.redirect("/", "/home");

module.exports = router;
