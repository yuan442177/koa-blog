/**
 * Created by Administrator on 2017/9/8.
 */
/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const adminInfoController = require('./../controllers/admin-info')
const articleController = require('./../controllers/Article')
const typeController = require('./../controllers/Type')

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp)
  /*  .get('/admin/allUser.json', adminInfoController.selectAlluser)*/
    .post('/admin/updateUserInfo.json', adminInfoController.updateUserInfo)
    .post('/admin/addArticle.json', articleController.addArticle)
    .post('/admin/selectAllArticleUser', articleController.selectAllArticleUser)
    .get('/admin/selectAllArticleUserGet', articleController.selectAllArticleUser)
    .post('/admin/selectArticleUser', articleController.selectArticleUser)
    .post('/admin/selectInPages', articleController.selectInPages)
    .post('/type/nav', typeController.selectAllTypeUser)


module.exports = routers