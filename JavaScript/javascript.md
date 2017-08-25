JavaScript
====
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

#### 2、window.open使用注意事项
`window.open`如果不是用户主动触发会被浏览器当成广告拦截，所以不要在异步请求中使用`window.open`，或者异步修改成同步  
