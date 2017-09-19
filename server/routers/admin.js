/**
 * 后台渲染&和操作  之后是否可以优化分开
 * Created by Administrator on 2017/9/8.
 */
const router = require('koa-router')()
const userInfo = require('./../controllers/user-info')
const adminInfo = require('./../controllers/admin-info')
const article = require('./../controllers/Article')
const type = require('./../controllers/Type')

/**
 * 后台渲染
 * @param   {obejct} ctx 上下文对象
 * @body {obejct} 数据对象
 */
module.exports = router
    .get( '/',async(ctx, next) => {//千万别把这里的  async 忘了一个下午的找问题 结果出在这里
        if(ctx.session && ctx.session.isLogin == true && ctx.session.userName){
            if(ctx.query.act == 'remove'){
                console.log('删除TODO')
                await userInfo.delectUser(ctx.query.id)
                ctx.redirect('/admin')
            }else{
                let data = await adminInfo.selectAlluser() //ejs后台渲染
                let username = ctx.session.userName
                await ctx.render('admin', {
                    body:data,
                    username:username
                })
            }
        }
        else {
            // 没有登录态则跳转到错误页面
            await ctx.render('error', {
                body:'error'
            })
        }
    })
    .get('/logout', adminInfo.clearSession)

    .get( '/user',async(ctx, next)=>{
        if(ctx.query.act == 'mod'){
           /* console.log(ctx.query)*/
            let data = await adminInfo.selectUser(ctx.query.id)
            /*console.log(data)*/
            let allData = await adminInfo.selectAlluser()
            let username = ctx.session.userName
            await ctx.render('admin', {
                updateData:data[0],
                body:allData,
                username:username
            });
        }else if(ctx.query.act == 'resetpassword'){
            console.log('ADD user TODO')
        }
    })

    /**
     * 文章管理页面
     */
    .get('/Article',async(ctx,next)=>{
        if(ctx.session && ctx.session.isLogin == true && ctx.session.userName){
            if(ctx.query.act == 'remove'){
                let data = await article.delectArticle(ctx.query.id)
                ctx.redirect('Article')
            }else if(ctx.query.act == 'update'){
                let data_id = await article.selectArticle(ctx.query.id)
                let data = await article.selectAllArticle()
                await ctx.render('Article',{
                    data:data,
                    updateData:data_id
                })
            }else{
                let data = await article.selectAllArticle()
                await ctx.render('Article',{
                    data
                })
            }
        }else{
            // 没有登录态则跳转到错误页面
            await ctx.render('error', {
                body:'error'
            })
        }
    })

    /**
     * 分类(类型)管理
     */
    .get('/Type',async(ctx,next)=>{
        if(ctx.session && ctx.session.isLogin == true && ctx.session.userName){
            let data = await type.selectAllType()
            await ctx.render('Type',{
                data
            })
        }else {
            // 没有登录态则跳转到错误页面
            await ctx.render('error', {
                body:'error'
            })
        }
    })