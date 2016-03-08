define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/Public/js/app/Document/Index/server/item.js');//category server
    g.app.directive('itemList', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/itemList.html',
            controller: function ($scope, itemData) {
                $scope.item = {};//itemList

                $scope.ui = {
                    listItemDiv: false,//下拉div默认关闭
                    listItemTitleIcon: '+',//右侧图标
                };

                $scope.fun = {
                    /**
                     * 项目列表title点击事件
                     * 15/12/28 */
                    itemListTitleClick: function () {
                        if (!$scope.ui.listItemDiv) {
                            $scope.ui.listItemDiv = true;
                        } else {
                            $scope.ui.listItemDiv = false;
                        }

                        this.changeIcon();
                    },

                    /**
                     * changIcon
                     * 15/12/29 */
                    changeIcon: function () {

                        if ($scope.ui.listItemTitleIcon == '+') {
                            $scope.ui.listItemTitleIcon = '-';
                        } else {
                            $scope.ui.listItemTitleIcon = '+';
                        }

                    },

                    /**
                     * 项目list li 点击事件,发射到父域 changeItem 事件,传过去 项目名称
                     * 15/12/28 */
                    changeThisItem: function (valObj) {
                        $scope.$emit('changeItem', valObj);
                        $scope.ui.listItemDiv = false;
                        this.changeIcon();
                    }



                }

                var fun = {
                    getList: function () {
                        itemData.getItem('getItem',function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    $scope.item = re;
                                })
                            }, 0);
                        });
                    },
                    init: function () {
                        this.getList();
                    }
                }

                fun.init();
            },
            link: function () {
            }
        }

    })
})
