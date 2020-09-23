var imgLoad =function(url,callback){
    var img=new Image();
    img.src=url;
    if(img.complete){
        callback.call(img);//图片是否存在缓存
        return;
    }
    img.onload=function(){
        callback.call(img);
    }
}
var printInfo=function(){
    console.log(this.width,this.height);
}
var imgsrc=document.getElementById("img").getAttribute("src");
imgLoad(imgsrc,printInfo);

//改进
//浏览器在加载图片时，会获得图片的头部数据，通过setInterval定时器获取图片尺寸状态
var src=document.getElementById("pic").getAttribute("src");
var pic=document.getElementById("pic");
var timer=setInterval(takePlace(src),50);
function takePlace(src){
    var img=new Image();
    img.src=src;
    if(img.width>0||img.height>0){
        pic.style.width=500+"px";
        pic.style.height=(500/img.width)*img.height+"px";
        alert(pic.style.width);
        clearInterval(timer);
    }
}
//优化 解决兼容性和性能问题
var imgReady = (function () {
    var list = [], intervalId = null,
 
    // 用来执行队列
    tick = function () {
        var i = 0;
        for (; i < list.length; i++) {
            list[i].end ? list.splice(i--, 1) : list[i]();
        };
        !list.length && stop();
    },
 
    // 停止所有定时器队列
    stop = function () {
        clearInterval(intervalId);
        intervalId = null;
    };
 
    return function (url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
            img = new Image();
         
        img.src = url;
 
        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        };
         
        width = img.width;
        height = img.height;
         
        // 加载错误后的事件
        img.onerror = function () {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };
         
        // 图片尺寸就绪
        onready = function () {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
                // 如果图片已经在其他地方加载可使用面积检测
                newWidth * newHeight > 1024
            ) {
                ready.call(img);
                onready.end = true;
            };
        };
        onready();
         
        // 完全加载完毕的事件
        img.onload = function () {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();
         
            load && load.call(img);
             
            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };
 
        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        };
    };
})();
