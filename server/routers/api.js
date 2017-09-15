/**
 * Created by Administrator on 2017/9/8.
 */
/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const adminInfoController = require('./../controllers/admin-info')
const article = require('./../controllers/Article')

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp)
  /*  .get('/admin/allUser.json', adminInfoController.selectAlluser)*/
    .post('/admin/updateUserInfo.json', adminInfoController.updateUserInfo)
    .post('/admin/addArticle.json', article.addArticle)
    .post('/admin/selectAllArticleUser', article.selectAllArticleUser)
    .get('/admin/selectAllArticleUserGet', article.selectAllArticleUser)
    .post('/admin/selectArticleUser', article.selectArticleUser)
    .post('/admin/selectInPages', article.selectInPages)


module.exports = routers