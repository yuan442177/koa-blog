/**
 * Created by Administrator on 2017/9/11.
 */
const adminInfoService = require('./../services/admin-info')
const userCode = require('./../codes/user')
const router = require('koa-router')()
const common = require('./../utils/common')

const admin = {
    /**
     * 查询出所有用户信息
     * @param  {obejct} ctx 上下文对象
     */
    async selectAlluser(ctx) {
        let result = {
            length:0,
            data:[]
        }
        let adminInfo = await adminInfoService.selectAlluser()
        if (adminInfo) {
            result.data = adminInfo
            result.length = adminInfo.length
        } else {
            result = ['error']
        }
        return result
    },
    /**
    * 销毁cookies
    * */
    async clearSession(ctx){
/*        console.log('清除操作执行')*/
        ctx.session.isLogin = 'false'
        ctx.redirect('/')
/*        console.log(new Date()+'清除操作执行OK')*/
    },

    /**
     * 添加用户
     * */
/*    async addUser(ctx){
        console.log('添加用户')
        let userdata = await admin.selectAlluser()
        console.log(userdata)
        let username = ctx.session.userName
        let data = await adminInfoService.selectUser()
        await ctx.render('admin', {
            body:userdata,
            username:username,
            addData:data
        });
    },*/

    /**
     * 根据id查找用户信息
     * */
    async selectUser(userId){
        let result = await adminInfoService.selectUser(userId)
        return result
    },

    /**
     * 根据ID修改用户信息
     * */
    async updateUserInfo(ctx){
        let formData = ctx.request.body
        console.log('co')
        console.log(formData)
        let result = await adminInfoService.updateUserInfo(formData)
        if(result.affectedRows == 1){
            ctx.redirect('/admin')
        }else{
            ctx.redirect('/error')
        }
    }
}
module.exports = admin
/*
const adminInfos = {
    /!**
     * 查询出所有用户信息
     * @param  {obejct} ctx 上下文对象
     *!/
    async selectAlluser(ctx) {
        let result = {
            length:0,
            data:[]
        }
        let adminInfo = await adminInfoService.selectAlluser()
        if (adminInfo) {
            result.data = adminInfo
            result.length = adminInfo.length
        } else {
            result = ['error']
        }
        console.log('查询到数据量:'+result.length)
        return result
    },
    async indexPage ( ctx ) {
        let body = await adminInfos.selectAlluser()
       /!* body.data.times = common.time2date(body.data.create_time);
        console.log(body.data.times)*!/
        await ctx.render('admin', {
            body
        })
    },
}
module.exports = adminInfos*/
