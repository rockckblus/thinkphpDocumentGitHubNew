/**
 * 全局对象
 * 15-7-29 */

define(function (require) {
    require('/Public/js/angular.min.js'); //angular
    /**
     * 修改post传值为标准格式
     * 15-12-26 */
    var app = angular.module('myApp', [], function ($httpProvider) {
        // Use x-www-form-urlencoded Content-Type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function (obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        // Override $http service's default transformRequest
        $httpProvider.defaults.transformRequest = [function (data) {
            return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
        }];
    });

    app.controller('bodyAll', function ($scope) {


    })

    /**
     * //angular 载入完成后。显示modle值
     * 15-12-26 */
    app.directive('angularEnd', function () {
        return {
            restrict: 'C',
            replace: false,
            link: function (scope, element, attrs) {
                scope.$watch('$viewContentLoaded', function () {
                    element[0].style.display = 'block';
                })
            }
        }
    })
    /**
     * html filter
     * 15-12-31 */
    app.filter('toHtml', function ($sce) {
        return function (text) {
            var reText = $sce.trustAsHtml(text);
            return reText;
        };
    })

    /**
     * getItemId 获取全局项目id
     * 16-1-3 */
    var getItemId = function () {
        return $('#leftLogo').attr('itemId');
    }


    /** 全局对象 */
    var g = {};
    g.app = app;
    g.apiHost = 'http://182.92.170.127:8088/Document/';
    g.itemId = getItemId;
    return g;
});