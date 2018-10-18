HTML
====
#### 1、文件下载
虽然a标签的`download`属性可以实现下载功能，但是实际使用时限制太多，诸如：浏览器兼容问题、跨域问题。  
总之是体验太差。所以最后还是希望通过服务器端来实现下载功能：  

    通过服务器端在文件的响应头中添加`Content-disposition`参数来实现下载  

这样通过文件链接就可以直接下载文件
参考文件：  
<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition>

#### 2、form中存在`button`标签
如果form中的`button`没有设置`type`点击会自动提交表单
```html
<form>
    <input type="text" name="demo">
    <button>click</button>
</form>
```
点击`click`会自动提交表单