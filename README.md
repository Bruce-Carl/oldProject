问题记录
====
主要记录工作学习中遇到的问题  

目录
----
* [HTML](#html)
* [CSS](#css)
* [JavaScript](#javascript)
* [React](#react)
* [PC兼容](#PC兼容)
* [移动端兼容](#移动端兼容)

HTML
----
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
参考资料：<br>
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



