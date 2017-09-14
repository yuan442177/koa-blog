/**
 * Created by Administrator on 2017/9/11.
 */
const adminModel = require('./../models/admin-info')
const userCode = require('./../codes/user')
const common = require('./../utils/common')

const admin = {

    /**
     * 查询所有用户
     * @param  {object} user 用户信息
     * @return {object}      创建结果
     */
    async selectAlluser() {
        let result = await adminModel.selectAlluser()
        return result
    },

    /**
     * 根据ID查询用户
     * @param  {object} id 用户ID
     * @return {object}      创建结果
     */
    async selectUser(id) {
        let result = await adminModel.selectUser(id)
        return result
    },

    /**
     * 修改用户信息
     * @param  {object} id 用户ID
     * @return {object}      创建结果
     */
    async updateUserInfo(formData) {
        let pass = common.md5(formData.password+common.MD5_SUFFIX)//md5加密
        let result = await adminModel.updateUserInfo({
            'id': formData.id,
            'email': formData.email,
            'name': formData.userName,
            'password':pass,
            'level':formData.level
        })
        return result
    },
}
module.exports = admin