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
虽然a标签的download属性可以实现下载功能，但是实际使用时限制太多，诸如：浏览器兼容问题、跨域问题。  
总之是体验太差。所以最后还是希望通过服务器端来实现下载功能：  

        通过服务器端在文件的响应头中添加`Content-disposition`参数来实现下载  
这样通过文件链接就可以直接下载文件  

[查看更多](https://github.com/mevv/note/blob/master/HTML/html.md)

CSS
----

[查看更多](https://github.com/mevv/note/blob/master/CSS/css.md)

JavaScript
----
#### 1、Form表单数据转JSON格式发送
序列化表单数据后再提取对应的数据转化为JSON
```javascript
$.fn.extend({
    serializeJSON: function () {
        var arr = $(this).serializeArray();
        var JSONData = {};
        var i;
        for (i in arr) {
            JSONData[arr[i].name] = arr[i].value;
        }
        return JSONData;
    }
});
```
参考资料：  
http://www.w3school.com.cn/jquery/ajax_serializearray.asp  

[查看更多](https://github.com/mevv/note/blob/master/JavaScript/javascript.md)

React
----

[查看更多](https://github.com/mevv/note/blob/master/React/react.md)

PC兼容
----

[查看更多](https://github.com/mevv/note/blob/master/PC兼容/pc.md)

移动端兼容
----

[查看更多](https://github.com/mevv/note/blob/master/移动端兼容/mobile.md)



