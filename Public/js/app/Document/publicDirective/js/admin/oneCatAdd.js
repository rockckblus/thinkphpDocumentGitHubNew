/**
 * adming 一级分类添加
 * 15/12/28 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/cate.js');//cateData
    g.app.directive('adminOneCatAdd', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/oneCatAdd.html',
            controller: function ($scope, cateData) {

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
                            cateData.addItem(postObj, function (re) {
                                    console.log('addonecat',re);
                                    alert('添加成功');
                                }
                            )
                        }else{
                            alert('不能为空 ');
                        }
                    }

                };

            },
            link: function (scope, element, attrs, rCtrl) {

                scope.title = attrs.title;
                scope.urlItem = attrs.urlitem;
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