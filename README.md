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
* [微信开发](./微信/weinxin.md)
* [疑惑](#疑惑)

HTML
----
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
#### 2、标签元素css初始化
引入normalize.css文件初始化    
github地址：<https://github.com/necolas/normalize.css>

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
<http://www.w3school.com.cn/jquery/ajax_serializearray.asp>  
<http://jquery.cuishifeng.cn/serializeArray.html>

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
#### 1、通过页面的显隐模拟移动端应用前后台切换
（微信H5活动页开发总结）单纯的H5页面是无法监听应用的切后台切换的，通过监听`visibilitychange`事件可以判断页面是否可见   
可以模拟监听应用的前后台切换

[查看更多](移动端兼容/mobile.md)

疑惑
----
#### 1、CSS命名与CSS在React中的运用 
由于以前的开发的项目并不是很大，开发人员也比较少，并没有去在意CSS的运用，CSS命名也是比较随意， 
然而发现CSS已经出现各种架构，恍然间有些许疑惑与茫然，不止如何下手。 
暂时决定尝试：处理器运用Sass、命名使用BEM、React项目不使用BEM而是CSS Modules 

参考资料：   
[如何看待 CSS 中 BEM 的命名方式？](https://www.zhihu.com/question/21935157)    
[如何在 React 中运用 CSS？](https://www.zhihu.com/question/30757566)   
[编写模块化CSS：BEM](http://www.w3cplus.com/css/css-architecture-1.html)  
[ReactJS中的CSS架构](http://www.infoq.com/cn/news/2017/08/ReactJS-CSS)



