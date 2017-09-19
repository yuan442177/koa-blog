/**
 * Created by Administrator on 2017/9/11.
 */
const common = require('./../utils/common')
const DataMod = require('./../models/DataMod')
const validator = require('validator')

const admin = {

    /**
     * 查询所有用户
     * @param  {object} user 用户信息
     * @return {object}      创建结果
     */
    async selectAlluser() {
        let result = await DataMod.selectAllDate('user_info')
        return result
    },

    /**
     * 根据ID查询用户
     * @param  {object} id 用户ID
     * @return {object}      创建结果
     */
    async selectUser(id) {
        let result = await DataMod.selectById('user_info',id)
        return result
    },

    /**
     * 修改用户信息
     * @param  {object} id 用户ID
     * @return {object}      创建结果
     */
    async updateUserInfo(formData) {
       /* let pass = common.md5(formData.password+common.MD5_SUFFIX)//md5加密
        let result = await adminModel.updateUserInfo({
            'id': formData.id,
            'email': formData.email,
            'name': formData.userName,
            'password':pass,
            'level':formData.level
        })
        return result*/
       /* let pass = common.md5(formData.password+common.MD5_SUFFIX)//md5加密*/
        let _sql =
            `UPDATE user_info SET email="${formData.email}",name="${formData.userName}",level="${formData.level}" WHERE id = ${formData.id}`
        let result = await DataMod.query( _sql )
        return result
    },

    /**
     * 重置密码
     * @param newPassword
     * @param id
     * @returns {Promise.<void>}
     */
    async resetPassword(newPassword,id){
        console.log('ser')
        console.log(newPassword)
        let result = {
            success: false,
            message: '',
        }
        if ( !/[\w+]{6,16}/.test( newPassword.password )  ) {
            return result
        }else{
            let pass = common.md5(newPassword.password+common.MD5_SUFFIX)//md5加密 不能解密 密码只有用户自己知道
            let msg = await DataMod.update('user_info',{password:pass},id)
            result.success = true
            result.message = msg.message
            return result
        }
    }
}
module.exports = admin