/**
 * Created by Administrator on 2017/9/18.
 */
/**
 * 尝试将所有的数据模块都集合在这里
 */

const dbUtils = require('./../utils/db-util')

const DataMod = {
    /**
     * 根据ID查询
     * @param table
     * @param id
     * @returns {Promise.<*>}
     */
    async selectById(table,id){
        let result = await dbUtils.selectById(table,id)
        if ( Array.isArray(result) && result.length > 0 ) {
            return result
        } else {
            result = null
        }
    },

    /**
     *新增一条数据
     * @param table
     * @param model
     * @returns {Promise.<*>}
     */
    async insert(table,model){
        let result = await dbUtils.insertData( table, model )
        return result
    },
}
module.exports = DataMod
