问题记录
====
主要记录工作学习中遇到的问题  

目录
----
* [HTML](#html)
* [CSS](#css)
* [JavaScript](#javascript)
* [React](#react)
* [PC兼容](#pc兼容)
* [移动端兼容](#移动端兼容)

HTML
----
#### 1、文件下载
虽然a标签的`download`属性可以实现下载功能，但是实际使用时限制太多，诸如：浏览器兼容问题、跨域问题。  
总之是体验太差。所以最后还是希望通过服务器端来实现下载功能：  

        通过服务器端在文件的响应头中添加`Content-disposition`参数来实现下载  
这样通过文件链接就可以直接下载文件  

[查看更多](HTML/html.md)

CSS
----
#### 1、通过欺骗浏览器开启硬件加速
```css
{
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}
```

[查看更多](CSS/css.md)

JavaScript
----
#### 1、Form表单数据转JSON格式发送
序列化表单数据后再提取对应的数据转化为JSON
```javascript
$.fn.extend({
    serializeJSON: function () {
        var arr = $(this).serializeArray();
        var JSONData = {};
        arr.forEach(function (item) {
            JSONData[item.name] = item.value;
        });
        return JSONData;
    }
});
```
参考资料：  
http://www.w3school.com.cn/jquery/ajax_serializearray.asp  

#### 2、window.open使用注意事项
`window.open`如果不是用户主动触发会被浏览器当成广告拦截，所以不要在异步请求中使用`window.open`，或者异步修改成同步  

[查看更多](JavaScript/javascript.md)

React
----

[查看更多](React/react.md)

PC兼容
----
#### 1、图片设置width: 100%注意事项
```css
{
   width: 100%;
   height: auto;
}
```
在某些浏览器上如果没有设置`height: auto`，图片的height会变大，移动端也存在同样的问题

[查看更多](PC兼容/pc.md)

移动端兼容
----

[查看更多](移动端兼容/mobile.md)



