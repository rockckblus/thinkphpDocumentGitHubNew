define(function (require) {

    /**
     * 验证相关
     * 15-7-31 */
    var verify = {

        /** 验证空 15-3-22 */
        isEmpty: function (t) {
            return $.trim(t) ? true : false;
        },

        /** 验证手机号 15-3-22 */
        checkMobile: function (sMobile) {
            if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(sMobile))) {
                return false;
            } else {
                return true;
            }
        },

    }

    /**
     * angular get post
     * 15-7-31 */
    var angular = {
        /**
         * angular post
         * 15-3-27 */
        postJsp: function ($http, getMoreUrl, data, re, errFun) {
            var endData = {};
            for (var vo in data) {
                endData[vo] = data[vo];
            }
            $http({
                url: getMoreUrl,
                method: "POST",
                data: endData,
                timeout: 9000 //超时设置
            }).success(function (response) {
                console.log('response', response);
                re(response);
            }).error(function (data, status, headers, config) {
                console.log('postDataErr', config);
                if (errFun) {
                    errFun(config);
                }
            })
        },

        /**
         * angualr get
         * 15-7-31 */
        getJson: function ($http, getMoreUrl, re) {
            $http({
                method: 'JSONP',
                url: getMoreUrl + "?callback=JSON_CALLBACK",
                timeout: 9000
            }).success(function (data) {
                re(data);
            }).error(function (data, status, headers, config) {
                return false;
            });
        }
    };

    var tools = {

        /**
         * 解析 json对象 为 url {name:'tom','age':'23'}pathInfo
         * 15/10/30 */
        parseParam: function (param, key) {
            var paramStr = "";
            if (param instanceof String || param instanceof Number || param instanceof Boolean) {
                //                    修改普通模式为pathInfo模式
                //                    paramStr += "&" + key + "=" + encodeURIComponent(param);
                paramStr += "/" + key + "/" + encodeURIComponent(param);
            } else {
                for (var vo in param) {

                }
                $.each(param, function (i) {
                    var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);

                    //                    修改普通模式为pathInfo模式
                    //                        paramStr += '&' + tools.parseParam(this, k);
                    paramStr += '/' + tools.parseParam(this, k);
                });
            }
            return paramStr.substr(1);
        },

        //cookIe 操作
        setCookie: function (name, value, moreCount) {
            var moreCountStr = '';
            if (moreCount) {
                moreCountStr = '\;' + moreCount;
            }
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);


            document.cookie = name + "=" + value + "\;expires=" + exp.toGMTString() + "" + "\;path=/";
        },
        getCookie: function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) return arr[2];
            else return null;
        }
    }

    var re = {
        verify: verify,
        angular: angular,
        tools: tools
    }
    return re;
})
