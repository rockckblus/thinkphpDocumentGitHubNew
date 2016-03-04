define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/item.js');//indexData
    g.app.directive('adminItemAdd', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/itemAdd.html',
            scope: {},
            controller: function ($scope, itemData) {
                $scope.name = '';
                var fun = {
                    addItem: function () {
                        var post;
                        if ($scope.name) {
                            post = {
                                name: $scope.name,
                                //thisItem: true
                            }
                            itemData.addItem($scope.urlItem, post, function (re) {
                                if (re.state == 1) {
                                    alert('添加成功');
                                } else {
                                    alert(re.msg);
                                }
                            });
                        } else {
                            alert('name为空');
                        }
                    }
                }

                $scope.fun = {
                    /**
                     * 提交name事件
                     * 15-12-27 */
                    subName: function () {
                        fun.addItem();
                    }
                }
            },
            link: function (scope, element, attrs) {
                scope.title = attrs.title;
                scope.urlItem = attrs.urlitem;
                console.log(element, attrs);
            }
        }

    })
})