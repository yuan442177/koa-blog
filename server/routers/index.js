/**
 * Created by Administrator on 2017/9/8.
 */
const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const admin = require('./admin')
const web = require('./web')
/*const work = require('./work')
 const error = require('./error')*/

router.use('/home', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/web', web.routes(), web.allowedMethods())
/*router.use('/work', work.routes(), work.allowedMethods())
 router.use('/error', error.routes(), error.allowedMethods())*/
module.exports = router