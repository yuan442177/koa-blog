/**
 * Created by Administrator on 2017/9/11.
 */
const crypto = require('crypto')

function toDou(n) {
    return n <10?'0'+n:''+n;
}

module.exports = {
    time2date:function (timestamp) {
        var oDate = new Date();
        oDate.setTime((timestamp * 1000));

        return oDate.getFullYear()+'-'+toDou(oDate.getMonth()+1)+'-'+
            toDou(oDate.getDate())+' '+toDou(oDate.getHours())+':'+toDou(oDate.getMinutes())
            +':'+toDou(oDate.getSeconds());
    },
    MD5_SUFFIX:'sdsadasdasd11SDFSDFSDFSDFSD1ASDWQ56AW321F5WERFWEFasdasda%*!$$#sada',
    md5:function (str) {
        var obj = crypto.createHash('md5');
        obj.update(str);
        return obj.digest('hex');
    },
}
