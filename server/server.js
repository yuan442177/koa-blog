/**
 * Created by Administrator on 2017/9/7.
 */
const koa = require('koa');
const convert = require('koa-convert');
const mysql = require('mysql');
const static = require('koa-static');
const views = require('koa-views')
const bodyParser = require('koa-bodyparser');
const path = require('path');
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')

const config = require('./../config')
const routers = require('./routers/index')

const server = new koa();

/*server.use( async (ctx)=>{
    ctx.body = 'Hello Koa2'
});*/
// session存储配置
const sessionMysqlConfig= {
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST,
}

// 存放sessionId的cookie配置
/*let cookie = {
    maxAge: 3600*1000, // cookie有效时长
    expires: '',  // cookie失效时间
    path: '/', // 写cookie所在的路径
    domain: 'localhost', // 写cookie所在的域名
}*/

// 配置session中间件
server.use(session({
    key: 'USER_SID',
    //储存到数据库
    store: new MysqlStore(sessionMysqlConfig),
    /*cookie: cookie*/
}))

// 配置ctx.body解析中间件
server.use(bodyParser())

// 配置静态资源加载中间件
server.use(convert(static(
    path.join(__dirname , './../static')
)))

// 配置服务端模板渲染引擎中间件
server.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 初始化路由中间件
server.use(routers.routes()).use(routers.allowedMethods())


server.listen(8081);
console.log('已启动服务,端口8080');