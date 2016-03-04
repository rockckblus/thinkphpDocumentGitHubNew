define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//category server
    require('/Public/js/app/Document/Index/server/item.js');//category server
    require('/Public/js/app/Document/Index/server/content.js');//category server
    require('/Public/js/app/Document/publicDirective/js/plguin/textHeight.js');//高亮
    g.app.directive('search', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/front/search.html',
            controller: function ($scope, cateData, contentData) {
                $scope.list = '';


                var fun = {
                    listItem: function () {
                        setTimeout(function () {
                            contentData.search($scope.key, function (re) {
                                setTimeout(function () {
                                    $scope.$apply(function () {
                                        console.log('list', re);
                                        $scope.list = re;


                                    })
                                }, 0);
                            });
                        }, 0);
                    },

                    height: function () {
                        setTimeout(function () {
                            $('#height').textSearch($scope.key);
                        }, 1000);
                    },

                    init: function () {
                        setTimeout(function () {
                            if (!$scope.key) {
                                setTimeout(function () {
                                    $scope.$apply(function () {
                                        $scope.title = 'key is null!';
                                    })
                                }, 0);
                            } else {
                                setTimeout(function () {
                                    fun.listItem();
                                    fun.height();
                                }, 0);
                            }
                        }, 0);
                    }
                }
                fun.init();
            },
            link: function (scope, element, attrs) {
                scope.key = attrs.urlitem;
                scope.title = attrs.title;
            }
        }
    })
})