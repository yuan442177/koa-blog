/**
 * Created by Administrator on 2017/9/14.
 */
/*文章业务层*/
const DataMod = require('./../models/DataMod')

const Article = {
    /**
     * 查询出所有的文章
     */
/*    async selectAllArticle(){
     let result = await articleModel.selectAllArticle()
     return result
     },*/
    async selectAllArticle(){
        let result = await DataMod.selectAllDate('article_table')
        return result
    },

    /**
     * 根据id查找文章
     */
    /*async selectArticle(id){
      let result = await articleModel.selectArticle(id)
        return result
    },*/
    async selectArticle(id){
        let result = await DataMod.selectById('Article_table',id)
        return result
    },

    /**
     * 新增一篇文章
    * */
    /*async addArticle(art){
        let result = await articleModel.addArticle(art)
        return result
    },*/
    async addArticle(art){
        let result = await DataMod.insert('Article_table',art)
        return result
    },

    /**
     * 文章分页查询
     */
    async selectInPages(pageSize,pageIndex){
        let result = []
        let count = await DataMod.count('Article_table')
        let _sql = `SELECT * FROM Article_table  LIMIT ${pageIndex}, ${pageSize}`
        let data = await DataMod.query( _sql )
        if(Array.isArray(data) && data.length > 0 ){
            result[0] = count
            result[1] = data
            return result
        } else {
            result = null
        }
    },

    /**
     * 根据id删除
     * @param id
     * @returns {Promise.<*|Promise.<*>>}
     */
    async delectArticle(id){
        let result = await DataMod.deleteDataById('article_table',id)
        return result
    },

    /**
     * 更新文章
     * @param formData
     * @returns {Promise.<*|Promise.<*>>}
     */
/*    async updateArticle(formData) {//方法二
        let _sql =
            `UPDATE article_table SET title="${formData.title}",content='${formData.content}',author="${formData.author}",tag="${formData.Tag}",type="${formData.type}"  WHERE id = ${formData.id}`
        let result = await DataMod.query( _sql )
        return result
    },*/
    async updateArticle(art,id) {
        console.log('ser')
        console.log(art)
        let result = await DataMod.update('article_table',art, id)
        return result
    },
}

module.exports = Article
