define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//category server
    require('/Public/js/app/Document/Index/server/item.js');//category server
    require('/Public/js/app/Document/Index/server/content.js');//category server
    g.app.directive('content', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/front/content.html',
            controller: function ($scope, cateData, contentData) {
                //$scope.content = '';


                var fun = {
                    listItem: function () {
                        setTimeout(function () {
                            cateData.getTwoCat($scope.twoCatId, function (re) {//此处需项目 和 1级
                                setTimeout(function () {
                                    $scope.$apply(function () {
                                        console.log('list', re);
                                        $scope.list = re;
                                    })
                                }, 0);
                            });
                        }, 0);
                    },
                    contentList: function () {
                        cateData.getContent($scope.id, function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    //re = re[$scope.id];
                                    $scope.content = re;
                                })
                            }, 0);
                        })
                    },


                    init: function () {
                        setTimeout(function () {
                            fun.contentList();
                        }, 0);
                    }
                }
                fun.init();
            },
            link: function (scope, element, attrs) {
                scope.id = attrs.urlitem;
                scope.title = attrs.title;
                scope.content = attrs.editurl;
            }
        }

    })
})