移动端兼容
====
#### 1、通过页面的显隐模拟移动端应用前后台切换
（微信H5活动页开发总结）单纯的H5页面是无法监听应用的切后台切换的，通过监听`visibilitychange`事件可以判断页面是否可见   
可以模拟监听应用的前后台切换