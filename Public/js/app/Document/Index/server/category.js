define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    g.app.factory('categoryData', function () {
            var data = {
                defaultl1: g.apiHost + '',
            }
            var fun = {
                /**
                 * 获取顶级分类
                 * 15-12-27 */
                getCategory: function () {
                    tools.angular.postJsp();
                }
            }

            return fun;
        }
    )
})
