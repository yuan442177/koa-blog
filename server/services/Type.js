/**
 * Created by Administrator on 2017/9/18.
 */
/*类型分类 业务*/
const DataMod = require('./../models/DataMod')

const type = {
    /**
     * 查询所有Type
     * @returns {Promise.<*|Promise.<*>>}
     */
    async selectAllType(){
        let result = await DataMod.selectAllDate('type_table')
        return result
    },

    /**
     * type查询
     * @param key
     * @returns {Promise.<*|Promise.<*>>}
     */
    async selectByType(key){
        let _sql = `SELECT * FROM Article_table  WHERE type = '${key.title}'`
        let result = await DataMod.query(_sql)
        if (result.length > 0){
            return result
        }else{
            return false
        }
    }

}

module.exports = type