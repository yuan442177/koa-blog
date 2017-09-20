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
        let result = await dbUtils.selectAllById(table,id)
        if ( Array.isArray(result) && result.length > 0 ) {
            return result
        } else {
            result = null
        }
    },

    /**
     * 查询所有数据
     * @param table
     * @returns {Promise.<*>}
     */
    async selectAllDate(table) {
        let result = await dbUtils.selectAll(table);
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
        /*console.log('DataMod')
        console.log(model)*/
        let result = await dbUtils.insertData( table, model )
        return result
    },

    /**
     * 根据ID删除
     * @param table
     * @param id
     * @returns {Promise.<*>}
     */
    async deleteDataById(table,id){
        let result = await dbUtils.deleteDataById(table, id)
        return result
    },

    /**
     * 根据id更新
     * @param table
     * @param value
     * @param id
     * @returns {Promise.<*>}
     */
    async update(table,value,id){
/*        console.log('DataMod')
        console.log(value)*/
        let result = await dbUtils.updateData(table,value,id)
        return result
    },

    /**
     * query综合语句
     * @param _sql
     * @returns {Promise.<*>}
     */
    async query(_sql){
        let result = await dbUtils.query(_sql)
        return result
    },

    async count(table){
        let result = await dbUtils.count(table)
        return result
    }

}
module.exports = DataMod
