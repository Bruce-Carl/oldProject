问题记录
====
主要记录工作学习中遇到的问题<br>
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

目录
----
*[HTML](https://github.com/mevv/note/HTML/html.md)
