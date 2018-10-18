CSS
====
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

#### 3、`mix-blend-mode: multiply`实现正片叠低效果   
`mix-blend-mode`是css3的内容，微软的IE、Edge都不支持（[兼容查询](https://caniuse.com/#search=mix-blend-mode)）。
所以需要通过js判断（虽然`@supports`也可以判断，但是[不兼容IE](https://caniuse.com/#search=%40supports)，也是很忧伤）是否支持`mix-blend-mode`，参考链接结合基本可以实现一致的效果。     
参考：     
<https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror>      
[效果基本一致：https://stackoverflow.com/questions/25158696/blend-modemultiply-in-internet-explorer](https://stackoverflow.com/questions/25158696/blend-modemultiply-in-internet-explorer)      
[设置图片透明度：https://stackoverflow.com/questions/2359537/how-to-change-the-opacity-alpha-transparency-of-an-element-in-a-canvas-elemen](https://stackoverflow.com/questions/2359537/how-to-change-the-opacity-alpha-transparency-of-an-element-in-a-canvas-elemen)      
[黑底修改：http://blog.csdn.net/sinat_17775997/article/details/58708042](http://blog.csdn.net/sinat_17775997/article/details/58708042)