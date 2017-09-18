/**
 * Created by Administrator on 2017/9/18.
 */
/*分类管理 操作*/

const typeService = require('./../services/Type')
const common = require('./../utils/common')

const type = {
    /**
     * 查询所有类型
     * @returns {Promise.<*|Promise>}
     */
    async selectAllType(){
        let result = await typeService.selectAllType()
        return result
    },
    async selectAllTypeUser(ctx){
        let result = await typeService.selectAllType()
/*        console.log('con')
        console.log(result)*/
        ctx.body = result
    }
}

module.exports = type