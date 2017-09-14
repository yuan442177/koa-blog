/**
 * 操作层
 * Created by Administrator on 2017/9/8.
 */
const userInfoService = require('./../services/user-info')
const userCode = require('./../codes/user')
const common = require('./../utils/common')

module.exports = {

    /**
     * 登录操作
     * @param  {obejct} ctx 上下文对象
     */
    async signIn( ctx ) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }

        let userResult = await userInfoService.signIn( formData )

        if ( userResult ) {
            if ( formData.userName === userResult.name ) {
                result.success = true
                result.message = "登录成功"
            } else {
                result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
                result.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
            }
        } else {
            result.code = 'FAIL_USER_NO_EXIST',
                result.message = userCode.FAIL_USER_NO_EXIST
        }

        if ( result.success === true ) {// formData.source === 'form' &&
            /*let session = ctx.session
            console.log(session)
            session.isLogin = true
            session.userName = userResult.name
            session.userId = userResult.id*/
            ctx.session = {
                isLogin:true,
                userName:userResult.name,
                userId:userResult.id
            }
            /*console.log('session')
            console.log(ctx.session)*/
            ctx.redirect('/admin')
        } else {
            ctx.body = result
        }
    },

    /**
     * 注册操作
     * @param   {obejct} ctx 上下文对象
     */
    async signUp( ctx ) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null
        }

        let validateResult = userInfoService.validatorSignUp( formData )

        if ( validateResult.success === false ) {
            result = validateResult
            ctx.body = result
            return
        }

        let existOne  = await userInfoService.getExistOne(formData)
        console.log( '信息:'+existOne )

        if ( existOne  ) {
            if ( existOne .name === formData.userName ) {
                result.message = userCode.FAIL_USER_NAME_IS_EXIST
                ctx.body = result
                return
            }
            if ( existOne .email === formData.email ) {
                result.message = userCode.FAIL_EMAIL_IS_EXIST
                ctx.body = result
                return
            }
        }

        let pass = common.md5(formData.password+common.MD5_SUFFIX)//md5加密
        let userResult = await userInfoService.create({
            email: formData.email,
            password: pass,
            name: formData.userName,
            create_time: new Date().getTime(),
            level: 1,
        })

        console.log( userResult )

        if ( userResult && userResult.insertId * 1 > 0) {
            result.success = true
        } else {
            result.message = userCode.ERROR_SYS
        }

        ctx.body = result
    },

    /**
     * 获取用户信息
     * @param    {obejct} ctx 上下文对象
     */
    async getLoginUserInfo( ctx ) {
        let session = ctx.session
        let isLogin = session.isLogin
        let userName = session.userName

        console.log( 'session=', session )

        let result = {
            success: false,
            message: '',
            data: null,
        }
        if ( isLogin === true && userName ) {
            let userInfo = await userInfoService.getUserInfoByUserName( userName )
            if ( userInfo ) {
                result.data = userInfo
                result.success = true
            } else {
                result.message = userCode.FAIL_USER_NO_LOGIN
            }
        } else {
            // TODO
        }

        ctx.body = result
    },

    /**
     * 校验用户是否登录
     * @param  {obejct} ctx 上下文对象
     */
    validateLogin( ctx ) {
        let result = {
            success: false,
            message: userCode.FAIL_USER_NO_LOGIN,
            data: null,
            code: 'FAIL_USER_NO_LOGIN',
        }
        let session = ctx.session
        if( session && session.isLogin === true  ) {
            result.success = true
            result.message = ''
            result.code = ''
        }
        return result
    },

    /**
     * 删除操作
     */
    async delectUser(id){
        let userResult = await userInfoService.delectUser(id)
        return userResult
    }
}