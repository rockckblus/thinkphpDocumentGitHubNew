define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    g.app.factory('cateData', function ($http) {
            var data = {
                addItem: g.apiHost + 'Cate/itemAdd',// add item
                addTwoCat: g.apiHost + 'Cate/addTwoCat',//add towCat
                getTwoCat: g.apiHost + 'Cate/getTwoCate',//getTowCat
                getOneAndTwo: g.apiHost + 'Cate/getOneAndTwo',//getOneAdnTowCat
                getContent: g.apiHost + 'Content/getContent'//getContent
            };

            var fun = {

                /**
                 * 添加post数据 name
                 * 15-12-27 */
                addItem: function (post, fun) {
                    tools.angular.postJsp($http, data.addItem, post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * add towCatIn
                 * 16/1/8 */
                addTwoCat: function (post, oneCatId, fun) {
                    post.oneCatId = oneCatId;
                    tools.angular.postJsp($http, data.addTwoCat, post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * getTwoCat
                 * 16/1/8 */
                getTwoCat: function (oneCatId, fun) {
                    oneCatId = {oneCatId: oneCatId};
                    tools.angular.postJsp($http, data.getTwoCat, oneCatId, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * getTwoCat,getOne
                 * 16/1/8 */
                getOneAndTwo: function (fun) {
                    tools.angular.postJsp($http, data.getOneAndTwo, {}, function (re) {
                        console.log('cateSever', re);
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * get content
                 * 16-1-9 */
                getContent: function (id, fun) {
                    var reid = {id:id};
                    tools.angular.postJsp($http, data.getContent, reid, function (re) {
                        console.log('cateSever', re);
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                }
            };

            return fun;
        }
    )
})
