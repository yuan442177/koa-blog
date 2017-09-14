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
        let result = await dbUtils.deleteDataById('Article_table', id)
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
    async selectArticle(id){
        let result = await dbUtils.selectById('Article_table',id)
        if ( Array.isArray(result) && result.length > 0 ) {
            return result
        } else {
            result = null
        }
    }
}

module.exports = Article
