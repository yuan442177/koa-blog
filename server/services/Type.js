/**
 * Created by Administrator on 2017/9/18.
 */
/*类型分类 业务*/

const validator = require('validator')
const typeModel = require('./../models/Type')
const common = require('./../utils/common')

const type = {
    async selectAllType(){
        let result = await typeModel.selectType()
/*        console.log('ser')
        console.log(result)*/
        return result
    }
}

module.exports = type