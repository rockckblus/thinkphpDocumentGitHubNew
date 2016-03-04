define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/item.js');//indexData
    g.app.directive('edit', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/edit.html',
            scope: {},
            controller: function ($scope,$rootScope, itemData) {
                $scope.list = '';
                var fun = {
                    listItem: function () {
                        setTimeout(function () {
                            itemData.getItem($scope.urlItem, function (re) {
                                $scope.list = re;
                            });
                        }, 0);
                    },
                    edit: function (e) {
                        var target = e.target;
                        target = angular.element(target);
                        var id = target.attr('_id');
                        var post = target.attr('name');
                        itemData.edit(id, $scope.editUrl, g.itemId(), post, function (re) {
                            if(re.ok == 1){
                                setTimeout(function(){
                                    $scope.$apply(function () {
                                       fun.init();
                                        alert('修改成功');
                                    });
                                },0);
                            }
                        });
                    },
                    del: function (id) {
                        itemData.del(id, $scope.delUrl, function (re) {
                            if(re.ok==1){
                                setTimeout(function(){
                                    $scope.$apply(function () {
                                       fun.init();
                                    });
                                },0);
                            }else if(re.ok == 0){
                                alert(re.msg);
                            }
                        });
                    },
                    init: function () {
                        this.listItem();
                    }
                }
                fun.init();

                $scope.fun = {
                    edit: function (id) {
                        fun.edit(id);
                    },
                    del: function (id) {
                        fun.del(id);
                    }
                }
            },
            link: function (scope, element, attrs) {
                console.log('attrs', attrs);
                scope.title = attrs.title;
                scope.urlItem = attrs.urlitem;
                scope.editUrl = attrs.editurl;
                scope.delUrl = attrs.delurl;
            }
        }

    })
})