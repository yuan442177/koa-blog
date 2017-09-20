#koa-blog
nodejs koa框架搭建Blog

    2017-09-19
        jq $()中使用变量:$('#'+var).

    2017-09-20
        GetQueryString 获取url参数
        <span>
        定时器是一个应用中非常重要的部分。React Native实现了和浏览器一致的定时器Timer。
        提供的方法如下：
        setTimeout, clearTimeout
        setInterval, clearInterval
        setImmediate, clearImmediate
        requestAnimationFrame, cancelAnimationFrame
        setTimeout (fn, 1000)  和 setInterval (fn,1000)
        和web中的意思一样，前者表示延迟1000毫秒后执行 fn 方法 ，后者表示每隔1000毫秒执行 fn 方法。
        requestAnimationFrame(fn)和setTimeout(fn, 0)不同，
        前者会在每帧刷新之后执行一次，而后者则会尽可能快的执行（在iPhone5S上有可能每秒1000次以上）。
        setImmediate则会在当前JavaScript执行块结束的时候执行，就在将要发送批量响应数据到原生之前。
        注意如果你在setImmediate的回调函数中又执行了setImmediate，它会紧接着立刻执行，而不会在调用之前等待原生代码。
        Promise的实现就使用了setImmediate来执行异步调用。
        <span>




