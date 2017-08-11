var JSSDK = {
    init:function(url,showMenu,action){
        /*
                if(showMenu){
                    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                        WeixinJSBridge.call('showOptionMenu');
                    });
                }else{
                    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                        WeixinJSBridge.call('hideOptionMenu');
                    });
                }
        */

        if($.isFunction(action)){
            wx.ready(action);
        }

        $.get(url,{url:location.href.split('#')[0]},function(data){
            wx.config($.extend({
                debug: false,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',

                    /*

                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'openLocation'
*/
                ]
            },data));
        },'jsonp');
    },
    getLocation:function(callback,cancel){
        var _callback = callback;
        var _cancel = cancel;
        wx.getLocation({
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                var speed = res.speed; // 速度，以米/每秒计
                var accuracy = res.accuracy; // 位置精度
                if($.isFunction(_callback)){
                    callback(latitude,longitude)
                }
            },
            cancel: cancel
        });
    }
}