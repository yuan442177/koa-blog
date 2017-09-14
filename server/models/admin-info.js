/**
 * Created by Administrator on 2017/9/11.
 */
const dbUtils = require('./../utils/db-util')

const admin = {
    /**
    *查询所有用户
    *@param {object} model 用户数据模型
    * @return {object} mysql执行结果
    * */
    async selectAlluser() {
        let result = await dbUtils.selectAll('user_info');
        return result
    },
/*    /!**
     * 根据id删除用户
     * @param  {string} id ID
     * @return {object|null}     结果
     *!/
    async delectUser(id){
        let _sql = `DELETE FROM user_info WHERE id = ${id}`
        let result = await dbUtils.query( _sql )
        return result
    },*/

    /**
     * 根据id查找用户
     * @param  {string} id ID
     * @return {object|null}     结果
     */
    async selectUser(id){
        /*let _sql = `DELETE FROM user_info WHERE id = ${id}`*/
        let result = await dbUtils.findDataById( 'user_info',id )
        return result
    },

    /**
     * 根据id修改用户信息
     * @param  {string} 查找条件和修改值
     * @return {object|null}     查找结果
     */
    async updateUserInfo(options){
        let _sql =
        `UPDATE user_info SET email="${options.email}",name="${options.name}",password="${options.password}",level="${options.level}" WHERE id = ${options.id}`
        let result = await dbUtils.query( _sql )
        return result
    }

}
module.exports = admin