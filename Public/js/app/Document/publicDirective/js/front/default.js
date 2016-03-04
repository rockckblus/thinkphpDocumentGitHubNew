define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    require('/Public/js/app/Document/Index/server/cate.js');//category server
    require('/Public/js/app/Document/Index/server/item.js');//category server
    require('/Public/js/app/Document/Index/server/content.js');//category server
    require('/Public/js/app/Document/Index/server/truePass.js');//category server
    g.app.directive('default1', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl:'/Public/js/app/Document/publicDirective/html/front/default1.html',
            controller: function ($scope, cateData) {
                $scope.list = {};//itemList

                /**
                 * 公共ui方法
                 * 15-12-31 */
                var thisClickItem = '';
                $scope.UI = {
                    chickThis: function (event) {
                        if (thisClickItem) {
                            thisClickItem.removeClass('h6LeftThis');
                            var element = angular.element(event.target);
                            element.addClass('h6LeftThis');
                            thisClickItem = element;
                        } else {
                            var element = angular.element(event.target);
                            element.addClass('h6LeftThis');
                            thisClickItem = element;
                        }

                    }
                };

                var fun = {
                    listItem: function () {
                        cateData.getOneAndTwo(function (re) {//此处需项目 和 1级

                            setTimeout(function () {
                                $scope.$apply(function () {
                                    console.log('list', re);
                                    $scope.list = re;
                                })
                            }, 0);
                        });
                    },

                    init: function () {
                        this.listItem();
                    }
                }
                setTimeout(function () {
                    fun.init();
                }, 400);
            },
            link: function () {
            }
        }

    })
    g.app.directive('default2', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            scope: {},
            template: '',
            controller: function ($scope, truePass) {

            },
            link: function (scope) {

            }
        }

    })
    g.app.directive('default3', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            scope: {},
            template: '<div>default3</div>',
            link: function () {
            }
        }

    })
})