/**
 * adming 一级分类添加
 * 15/12/28 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/item.js');//indexData
    require('/Public/js/app/Document/Index/server/cate.js');//indexData
    g.app.directive('adminThreeCatAdd', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/threeCatAdd.html',
            controller: function ($scope, itemData, cateData) {
                $scope.list = '';

                $scope.fun = {
                    getItemId: function () {//获取项目id
                        return g.itemId();
                    },
                    listItem: function () {

                        cateData.getOneAndTwo(function (re) {//此处需项目 和 1级
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.list = re;
                                })
                            }, 0);
                        });

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