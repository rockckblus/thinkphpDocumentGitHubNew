/**
 * adming 详情添加
 * 15/12/28 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//cateData
    require('/Public/js/app/Document/Index/server/item.js');//cateData
    require('/Public/js/app/Document/Index/server/content.js');//cateData
    g.app.directive('adminContentAdd', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/contentAdd.html',
            controller: function ($scope, cateData, itemData, contentData) {
                $scope.list = '';
                $scope.from = {
                    name: ''
                }

                $scope.fun = {
                    listItem: function () {
                        cateData.getOneAndTwo(function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.list = re;
                                })
                            }, 0);
                        });

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
                                $scope.from.catId = $scope.threeCatId;
                                contentData.addItem($scope.from, function (re) {
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
                        this.listItem();
                    }
                };
                $scope.fun.init();
            },
            link: function (scope, element, attrs, rCtrl) {

                scope.title = attrs.title;
                scope.threeCatId = attrs.urlitem;
                scope.editUrl = attrs.editurl;
                scope.delUrl = attrs.delurl;
            }
        }
    })
})