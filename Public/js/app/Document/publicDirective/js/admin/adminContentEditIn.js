define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//category server
    require('/Public/js/app/Document/Index/server/item.js');//category server
    require('/Public/js/app/Document/Index/server/content.js');//category server
    g.app.directive('adminContentEditIn', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/contentEditIn.html',
            controller: function ($scope, cateData, contentData) {
                $scope.content = '';
                $scope.from = {
                    name: '',
                    content: ''
                }

                $scope.fun = {
                    contentList: function () {
                        cateData.getContent($scope.id, function (re) {
                        	console.log('editInRe',re);
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    re = re[$scope.id];
                                    $scope.from.name = re.name;
                                    $scope.from.content = re.content;

                                })
                            }, 0);
                        })
                    },

                    trueName: function () {
                        if ($scope.from.name) {
                            return true;
                        } else {
                            alert('name is Null');
                        }
                    },

                    /**
                     * 提交事件
                     * 16/1/8 */
                    sub: function () {
                        if (this.trueName()) {
                            setTimeout(function () {
                                var content = localStorage.getItem('content');
                                $scope.from.content = content;
                                $scope.from.id = $scope.id;

                                contentData.editItem($scope.from, function (re) {
                                    if (re.state == 1) {
                                        alert('添加成功');
                                    } else {
                                        alert(re.msg);
                                    }
                                });
                            }, 0);
                        }
                    },


                    init: function () {
                        setTimeout(function () {
                            $scope.fun.contentList();
                        }, 0);
                    }
                }
                $scope.fun.init();
            },
            link: function (scope, element, attrs) {
                scope.id = attrs.urlitem;
                scope.title = attrs.title;
                scope.content = attrs.editurl;
            }
        }

    })
})