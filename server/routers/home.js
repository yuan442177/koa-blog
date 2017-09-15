/**
 * Created by Administrator on 2017/9/8.
 */
const router = require('koa-router')()
/*const admin = require('./../controllers/admin')*/
const article = require('./../controllers/Article')

module.exports = router.get( '/', async(ctx)=>{
    if(ctx.session && ctx.session.isLogin == true && ctx.session.userName){
        /*let data = await article.selectInPages()*/
        await ctx.render('fenye',{
            data:'data'
        })
    }else {
        // 没有登录态则跳转到错误页面
        await ctx.render('error', {
            body:'error'
        })
    }
})