define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    g.app.factory('itemData', function ($http) {
            var data = {

                /**
                 * 项目
                 * 16-1-4 */
                getItem: g.apiHost + 'Item/getItem',//select Item
                addItem: g.apiHost + 'Item/itemAdd',// add item
                edit: g.apiHost + 'Item/getItem',//edit first List
                editItem: g.apiHost + 'Item/editItem',//edit
                delItem: g.apiHost + 'Item/delItem',//del

                /**
                 * 验证admin密码
                 * 16/1/13 */
                truePass: g.apiHost + 'Item/truePass',

                /**
                 * 一级分类List
                 * 16-1-2 */
                oneCatList: g.apiHost + 'Cate/getItem',//list
                editOneCate: g.apiHost + 'Cate/editOneCate',//editOneCat
                delOneCate: g.apiHost + 'Cate/delOneCate',//delOneCat

            }
            var fun = {
                /**
                 * 获取顶级分类
                 * 15-12-27 */
                getItem: function (urlItem, fun) {
                    tools.angular.postJsp($http, data[urlItem], {}, function (re) {
                        fun(re)
                    });
                },

                /**
                 * 添加post数据 name ,传入post的 网址关键词
                 * 15-12-27 */
                addItem: function (urlItem, post, fun) {
                    tools.angular.postJsp($http, data[urlItem], post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },
                /**
                 * Editpost数据 name ,传入修改的 _id,项目id，name值
                 * 15-12-27 */
                edit: function (id, editUrl, itemId, post, fun) {
                    var post = {
                        _id: id,
                        itemId: itemId,
                        name: post
                    }
                    console.log('post', post, editUrl);

                    tools.angular.postJsp($http, data[editUrl], post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * del,
                 * 16-1-3 */
                del: function (id, delUrl, fun) {
                    var post = {
                        _id: id
                    }
                    tools.angular.postJsp($http, data[delUrl], post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },

                /**
                 * truePass,
                 * 16-1-3 */
                truePass: function (fun) {
                    var post = {
                    }
                    tools.angular.postJsp($http, data.truePass, post, function (re) {
                        fun(re);
                    }, function (re) {
                        console.error('re', re);
                    })
                },


            }

            return fun;
        }
    )
})
