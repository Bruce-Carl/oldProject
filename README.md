#H5活动页动效实现练习
主要实现微信活动页动效
##临时记录
序列化表单数据后再提取对应的数据转化为JSON
```
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