/**
 * Created by Administrator on 2017/9/18.
 */
/*类型分类 业务*/
const DataMod = require('./../models/DataMod')

const type = {
    async selectAllType(){
        let result = await DataMod.selectAllDate('type_table')
/*        console.log('ser')
        console.log(result)*/
        return result
    }
}

module.exports = type