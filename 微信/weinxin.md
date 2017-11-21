微信相关
====
一、微信网页开发
----
#### 1、不通过权限验证是使用部分微信提供的js接口
正常使用JS-SDK时需要引入微信提供的js文件，并且需要进行权限验证配置，否则无法使用JS-SDK提供的接口,    
但是通过旧版的[微信JSAPI](https://github.com/Tencent/weui/wiki/%E5%BE%AE%E4%BF%A1JSAPI)可以使用一些不需要权限的API接口（如：预览图片） 
