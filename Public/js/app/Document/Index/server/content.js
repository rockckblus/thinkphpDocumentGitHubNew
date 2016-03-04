define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    g.app.factory('contentData', function ($http) {
            var data = {
                addContent: g.apiHost + 'Content/addContent',// add item
                editContent: g.apiHost + 'Content/editContent',// edit item
                getContentList: g.apiHost + 'Content/getContentList',// getContentList
                search: g.apiHost + 'Content/search',//search
                del: g.apiHost + 'Content/delItem'//del
            };

            var fun = {

                /**
                 * 添加post数据 name
                 * 15-12-27 */
                addItem: function (post, fun) {
                    tools.angular.postJsp($http, data.addContent, post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * 添加post数据 name
                 * 15-12-27 */
                editItem: function (post, fun) {
                    tools.angular.postJsp($http, data.editContent, post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * getAll Conetnt by itemId
                 * 16/1/8 */
                getContentList: function (fun) {
                    tools.angular.postJsp($http, data.getContentList, {}, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * search
                 * 16-1-13 */
                search: function (key, fun) {
                    var key = {key: key};
                    tools.angular.postJsp($http, data.search, key, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * del
                 * 16/1/19 */
                delContent: function (id, func) {
                    var post = {_id: id};
                    tools.angular.postJsp($http, data.del, post, function (re) {
                        func(re);
                    })
                }









            };
            return fun;
        }
    )
})
