/**
 * Created by Administrator on 2017/9/18.
 */
/*导航菜单&分类 数据模块*/

const dbUtils = require('./../utils/db-util')

const type ={
    /**
     *增
     * @returns {Promise.<void>}
     */
    async addNav(){
        let result = await dbUtils.insertData()
    },

    /**
     * 删
     * @returns {Promise.<void>}
     */
    async delectNav(){

    },

    /**
     *改
     * @returns {Promise.<void>}
     */
    async updateNav(){

    },

    /**
     * 查
     * @returns {Promise.<void>}
     */
    async selectType(){
        let result = await dbUtils.select('type_table',['ID','title'])
        /*console.log('mod')
        console.log(result)*/
        return result
    }
}
module.exports = type