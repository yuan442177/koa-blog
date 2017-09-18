/**
 * Created by Administrator on 2017/9/14.
 */
/*文章操作层*/
const articleService = require('./../services/Article')
const common = require('./../utils/common')

const Article = {
    /**
     * admin
     * 查询出所有的文章
     */
    async selectAllArticle(ctx){
        let result = await articleService.selectAllArticle()
        return result
    },
    /**
     * 前台
     * 查询出所有的文章
     */
    async selectAllArticleUser(ctx){
        let result = await articleService.selectAllArticle()
        ctx.body = result
    },

    /**
     * 根据id查找文章
     */
    async selectArticle(id){
        let result = await articleService.selectArticle(id)
        return result
    },
    async selectArticleUser(ctx){
        let id = ctx.request.body.id
        let result = await articleService.selectArticle(id)
        ctx.body = result
    },
    /**
     * 新增一篇文章
     */
    async addArticle(ctx){
        let formData = ctx.request.body
        let resule = await articleService.addArticle({
            title: formData.title,
            content: formData.content,
            time: new Date(),
            author:formData.author,
            Tag:formData.Tag,
            type:formData.type
        })
        if ( resule && resule.insertId * 1 > 0) {
            ctx.redirect('/admin/Article')
        } else {
            resule.message = resule.ERROR_SYS
        }
        return resule
    },

    /**
     * 文章分页查询
     */
    async selectInPages(ctx){
        let pageSize = ctx.request.body.pageSize
        let pageIndex = ctx.request.body.pageIndex
        let result = await articleService.selectInPages(pageSize,pageIndex)
        ctx.body = result
    },

    async delectArticle(id){
        let result = await articleService.delectArticle(id)
        return result
    }
}

module.exports = Article