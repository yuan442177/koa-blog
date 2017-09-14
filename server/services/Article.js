/**
 * Created by Administrator on 2017/9/14.
 */
/*文章业务层*/
const articleModel = require('./../models/Article')
const common = require('./../utils/common')

const Article = {
    /**
     * 查询出所有的文章
     */
    async selectAllArticle(){
        let result = await articleModel.selectAllArticle()
        return result
    },

    /**
     * 根据id查找文章
     */
    async selectArticle(id){
      let result = await articleModel.selectArticle(id)
        return result
    },

    /**
     * 新增一篇文章
    * */
    async addArticle(art){
        let result = await articleModel.addArticle(art)
        return result
    }
}


module.exports = Article
