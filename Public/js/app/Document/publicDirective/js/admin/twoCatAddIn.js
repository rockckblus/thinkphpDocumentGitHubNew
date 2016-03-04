/**
 * adming 一级分类添加
 * 15/12/28 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//cateData
    require('/Public/js/app/Document/Index/server/item.js');//cateData
    g.app.directive('adminTwoCatAddIn', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/twoCatAddIn.html',
            controller: function ($scope, cateData, itemData) {
                $scope.list = '';

                $scope.fun = {

                    getItemId: function () {//获取项目id
                        //var elementHeader = document.getElementById('leftLogo');
                        //elementHeader = angular.element(elementHeader);
                        //return elementHeader.attr('itemId');
                        return g.itemId();
                    },
                    isTrue: false,//判断是否有输入
                    subClick: function () {
                        var nameArr = document.getElementsByName('topName[]');
                        var tempSub = [];
                        for (var vo in nameArr) {
                            if (nameArr[vo].value) {
                                var tempItem = {
                                    pid: 0,//顶级分类
                                    name: nameArr[vo].value,//一条输入值
                                    itemId: this.getItemId()
                                }
                                tempSub.push(tempItem);
                                this.isTrue = true;
                            }
                        }

                        $scope.fun.subObj(tempSub);
                    },

                    /**
                     * post数据
                     * 15/12/29 */
                    subObj: function (postObj) {
                        if (postObj[0]) {
                            cateData.addTwoCat(postObj, $scope.oneCatId, function (re) {
                                    setTimeout(function () {
                                        $scope.$apply(function () {
                                            $scope.fun.getList();
                                        });
                                    }, 0);
                                    alert('添加成功');
                                }
                            )
                        } else {
                            alert('不能为空 ');
                        }
                    },

                    /**
                     * getList get当前oneCat 的 二级
                     * 16/1/8 */
                    getList: function () {
                        cateData.getTwoCat($scope.oneCatId, function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.list = re;
                                })
                            }, 0);

                        })
                    },

                    edit: function (e) {
                        var target = e.target;
                        target = angular.element(target);
                        var id = target.attr('_id');
                        var post = target.attr('name');
                        itemData.edit(id, 'editOneCate', g.itemId(), post, function (re) {
                            if (re.ok == 1) {
                                setTimeout(function () {
                                    $scope.$apply(function () {
                                        $scope.fun.init();
                                        alert('修改成功');
                                    });
                                }, 0);
                            }
                        });
                    },
                    del: function (id) {
                        itemData.del(id, 'delOneCate', function (re) {
                            if (re.ok == 1) {
                                setTimeout(function () {
                                    $scope.$apply(function () {
                                        $scope.fun.init();
                                    });
                                }, 0);
                            } else if (re.ok == 0) {
                                alert(re.msg);
                            }
                        });
                    },
                    init: function () {
                        setTimeout(function () {
                            $scope.fun.getList();
                        }, 0);
                    }
                };

                $scope.fun.init();
            },
            link: function (scope, element, attrs, rCtrl) {

                scope.title = attrs.title;
                scope.oneCatId = attrs.urlitem;
                scope.editUrl = attrs.editurl;
                scope.delUrl = attrs.delurl;
                scope.subData = {
                    moreFor: [1, 2, 3, 4, 5],//循环5个输入项
                    topName: []
                };

                scope.ui = {}
            }
        }
    })
})