/**
 * Created by Administrator on 2017/9/8.
 */
const router = require('koa-router')()
/*const admin = require('./../controllers/admin')*/

module.exports = router.get( '/', async(ctx)=>{
    ctx.body = 'home路由'
})