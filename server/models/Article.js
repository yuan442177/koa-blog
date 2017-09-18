/**
 * Created by Administrator on 2017/9/14.
 */
/*文章数据模块*/
const dbUtils = require('./../utils/db-util')

const Article ={
    /**
     *增
     */
    async addArticle(model){
        let result = await dbUtils.insertData( 'Article_table', model )
        return result
    },

    /**
     * 删
     */
    async delectArticle(id){
        let result = await dbUtils.deleteDataById('article_table', id)
       /* console.log('mod')
        console.log(result)*/
        return result
    },

    /**
     * 改
     */
    async updateArticle(options){
        let _sql =
            `UPDATE Article_table SET title="${options.title}",content="${options.content}",time="${options.time}",author="${options.author}" WHERE id = ${options.id}`
        let result = await dbUtils.query( _sql )
        return result
    },

    /**
     * 查
     */
    async selectAllArticle(){
        let result = await dbUtils.selectAll('Article_table')
        if ( Array.isArray(result) && result.length > 0 ) {
            return result
        } else {
            result = null
        }
    },
/*    async selectArticle(id){
        let result = await dbUtils.selectById('Article_table',id)
        if ( Array.isArray(result) && result.length > 0 ) {
            return result
        } else {
            result = null
        }
    },*/

    /**
     * 分页
     * @param pageSize
     * @param pageIndex
     * @returns {Promise.<Array>}
     */
    async selectInPages(pageSize,pageIndex){
        let result = []
        let count = await dbUtils.count('Article_table')
        let _sql = `SELECT * FROM Article_table  LIMIT ${pageIndex}, ${pageSize}`
        let data = await dbUtils.query( _sql )
        if(Array.isArray(data) && data.length > 0 ){
            result[0] = count
            result[1] = data
            return result
        } else {
            result = null
        }
    }
}

module.exports = Article
