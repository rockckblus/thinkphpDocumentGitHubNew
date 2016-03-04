/**
 * adming 一级分类添加
 * 15/12/28 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/item.js');//indexData
    g.app.directive('adminTwoCatAdd', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/twoCatAdd.html',
            controller: function ($scope, itemData) {
                $scope.list = '';

                $scope.fun = {
                    getItemId: function () {//获取项目id
                        return g.itemId();
                    },
                    listItem: function () {
                        setTimeout(function () {
                            itemData.getItem($scope.urlItem, function (re) {
                                console.log('re', re);
                                $scope.list = re;
                            });
                        }, 0);
                    },
                    init: function () {
                        this.listItem();
                    }
                };


                $scope.fun.init();


            },
            link: function (scope, element, attrs, rCtrl) {

                scope.title = attrs.title;
                scope.urlItem = attrs.urlitem;
                scope.ui = {}
            }
        }
    })
})