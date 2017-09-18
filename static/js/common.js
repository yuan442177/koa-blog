/**
 * Created by Administrator on 2017/9/18.
 */
/*前台通用配置文件*/
/*const allConfig = require("./../../config")*/

//创建顶部导航栏
function createNav(){
    $.ajax({
        type: "POST",
        url: "/api/type/nav",
        success: function(data){
            let div_nav = document.createElement('div')
            let ul_nav = document.createElement('ul')
            div_nav.appendChild(ul_nav)
            var body=document.getElementsByTagName("body")[0]
            body.insertBefore(div_nav,body.childNodes[0]);
            for(var i = 0;i<data.length;i++){
                let li_nav = document.createElement('li')
                ul_nav.appendChild(li_nav)
                let a_nav = document.createElement('a')
                a_nav.setAttribute('href','/type.html?id='+data[i].ID+'.html')
                li_nav.appendChild(a_nav)
                a_nav.innerHTML=data[i].title
            }
        }
    });
}

//设置标题
function createTitle() {
    console.log(document.title)
}
