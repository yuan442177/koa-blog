/**
 * 前台页面 暂时不用这个后台渲染
 * Created by Administrator on 2017/9/18.
 */
const router = require('koa-router')()
const userInfo = require('./../controllers/user-info')
const adminInfo = require('./../controllers/admin-info')
const article = require('./../controllers/Article')
const type = require('./../controllers/Type')

module.exports = router
    .get('/type',async(ctx,next)=>{
        await ctx.render('web/type',{
            data:'type'
        })
    })
