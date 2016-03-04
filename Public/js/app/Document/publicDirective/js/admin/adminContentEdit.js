/**
 * adming 详情添加
 * 15/12/28 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//cateData
    require('/Public/js/app/Document/Index/server/item.js');//cateData
    require('/Public/js/app/Document/Index/server/content.js');//cateData
    g.app.directive('adminContentEdit', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/contentEdit.html',
            controller: function ($scope, cateData, itemData, contentData) {
                $scope.list = '';
                $scope.contentList = '';
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

                    contentList: function () {
                        contentData.getContentList(function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.contentList = re;
                                })
                            }, 0);
                        })
                    },

                    del: function (id) {

                        var r = confirm('确定删除吗?');
                        if (r) {
                            contentData.delContent(id, function (re) {
                                try {
                                    if (re.n == 1) {
                                        $scope.fun.contentList();
                                    }
                                } catch (e) {
                                    console.error(e);
                                }
                            })
                        }
                    },

                    init: function () {
                        this.listItem();
                        this.contentList();
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