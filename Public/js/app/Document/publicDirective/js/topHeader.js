define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    require('/Public/js/app/Document/Index/server/item.js');//indexData
    require('/Public/js/app/Document/Index/server/content.js');//indexData
    require('/Public/js/app/Document/Index/server/truePass.js');

    g.app.directive('topHeader', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            templateUrl: '/Public/js/app/Document/publicDirective/html/topHeader.html',
            scope: {},
            controller: function ($scope, itemData, truePass) {
                $scope.topHeader = {
                    item: {
                        thisItem: '项目',
                        list: ''
                    },
                }
                $scope.amdinShow = false;
                $scope.passWord = '';
                $scope.adminTag = '';
                $scope.ispass = truePass.isPass; //判断登陆admin
                $scope.search = '';

                $scope.sub = function () {
                    if ($scope.passWord) {
                        tools.tools.setCookie('passWord', $scope.passWord);
                        truePass.truePass();
                        setTimeout(function () {
                            $scope.$apply(function () {
                                $scope.ispass = truePass.isPass;
                                $scope.adminTag = tools.tools.getCookie('adminTag');
                            })
                        }, 0);
                    }
                }


                $scope.$watch('ispass', function (e) {
                    if (e) {
                        setTimeout(function () {
                            $scope.$apply(function () {
                                $scope.amdinShow = true;
                            })
                        }, 0);
                    }
                })

                var fun = {


                    showAdmin: function () {
                        setTimeout(function () {
                            $scope.$apply(function () {
                                $scope.amdinShow = true;
                                $scope.ispass = truePass.isPass;
                                $scope.adminTag = tools.tools.getCookie('adminTag');
                            })
                        }, 0);
                    },

                    trueAdmin: function () {
                        if (tools.tools.getCookie('adminTag')) {
                            var passWord = tools.tools.getCookie('passWord');
                            console.log(passWord);
                            if (passWord) {
                                truePass.truePass(function (re) {
                                    console.log('re', re);
                                    if (re.state) {
                                        fun.showAdmin();
                                    }
                                })
                            }
                        }
                    },


                    changeLeftLogItemId: function (id) {//change 项目id
                        var elementHeader = document.getElementById('leftLogo');
                        elementHeader = angular.element(elementHeader);
                        setTimeout(function () {
                            $scope.$apply(function () {
                                elementHeader.attr('itemId', id);
                                tools.tools.setCookie('itemId', id);
                            })
                        }, 0);
                    },

                    getItem: function (urlItem, fun) {
                        itemData.getItem(urlItem, function (re) {
                            setTimeout(function () {
                                $scope.$apply(function () {
                                    try {
                                        $scope.item.list = re;
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    if (fun) {
                                        fun(re);
                                    }
                                })
                            }, 0);
                        });
                    },

                    getThisItem: function () {
                        this.getItem('getItem', function (re) {
                            if (tools.tools.getCookie('itemId')) {
                                for (var vo in re) {
                                    if (re[vo]._id == tools.tools.getCookie('itemId')) {
                                        $scope.topHeader.item.thisItem = re[vo].name;
                                        fun.changeLeftLogItemId(re[vo]._id);
                                    }
                                }
                            } else {
                                for (var vo in re) {
                                    if (re[vo].thisItem) {
                                        $scope.topHeader.item.thisItem = re[vo].name;
                                        tools.tools.setCookie('itemId', re[vo]._id);
                                        fun.changeLeftLogItemId(re[vo]._id);
                                    }
                                }
                            }
                        })
                    },

                    /**
                     * 监听子域emit来的 changeItem 事件，变换标题，
                     * 15/12/28 */
                    eventChangeListItem: function () {
                        $scope.$on('changeItem', function (e, l) {
                            $scope.topHeader.item.thisItem = l.name;
                            fun.changeLeftLogItemId(l._id);
                        })
                    },

                    init: function () {
                        this.getThisItem();//给默认项目title
                        this.eventChangeListItem();//监听事件项目变换事件
                        this.trueAdmin();//判断已经登录显示 admin
                    }
                }
                fun.init();
            },
            link: function (scope, element, attrs, ctrls) {
                console.log(ctrls.$scope);
            }
        }
    })
})