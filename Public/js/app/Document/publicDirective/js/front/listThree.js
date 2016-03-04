define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//category server
    require('/Public/js/app/Document/Index/server/item.js');//category server
    require('/Public/js/app/Document/Index/server/content.js');//category server
    g.app.directive('listThree', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/front/listThree.html',
            controller: function ($scope, cateData,contentData) {
                $scope.list = {};//itemList
                $scope.contentList = '';

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
                        setTimeout(function(){
                            cateData.getTwoCat($scope.twoCatId, function (re) {//此处需项目 和 1级
                                setTimeout(function () {
                                    $scope.$apply(function () {
                                        console.log('list', re);
                                        $scope.list = re;
                                    })
                                }, 0);
                            });
                        },0);
                    },
                    contentList: function () {
                        contentData.getContentList(function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.contentList = re;
                                })
                            }, 0);
                        })
                    },

                    init: function () {
                        this.listItem();
                        this.contentList();
                    }
                }
                fun.init();
            },
            link: function (scope, element, attrs) {
                scope.twoCatId = attrs.urlitem;
            }
        }

    })
})