JavaScript
====
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
<http://www.w3school.com.cn/jquery/ajax_serializearray.asp>  

#### 2、window.open使用注意事项
`window.open`如果不是用户主动触发会被浏览器当成广告拦截，所以不要在异步请求中使用`window.open`，或者异步修改成同步  

#### 3、在数组指定位置插入数据和数组深拷贝
情境：在一个数组的指定位置插入一个数据并且不改变原数组
```javascript
var arr = [1, 2, 4];
// 数组深拷贝
var newArr = arr.slice();
// 在数组指定位置插入数据
newArr.splice(2, 0, 3);
```
最终结果：`arr`为`[1, 2, 4]`，`newArr`为`[1, 2, 3, 4]`  
参考资料：  
<http://www.w3school.com.cn/jsref/jsref_splice.asp>
<http://www.w3school.com.cn/jsref/jsref_slice_array.asp>
<http://blog.csdn.net/u014168594/article/details/53141452>
<http://blog.csdn.net/fungleo/article/details/54931379>
