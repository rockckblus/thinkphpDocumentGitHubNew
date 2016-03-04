define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    g.app.directive('thisUrl', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            templateUrl: '/Public/js/app/Document/publicDirective/html/thisUrl.html',
            replace: true,
            scope: {},
            controller: function ($scope, itemData) {
                $scope.thisUrl = '';
                $scope.$on('changeThisUrlFromTop', function () {
                    fun.init();
                })

                var fun = {
                    /**
                     * 判断默认 3个 block不是 default
                     * 15/12/29 */
                    eachDefault: function () {
                        var block1FirstTag = this.trueDefault('block1');
                        var block2FirstTag = this.trueDefault('block2');
                        var block3FirstTag = this.trueDefault('block3');

                        /**
                         * 拼接字符串
                         * 15/12/29 */

                        var str = 'http://localhost/Index/index/';

                        if (block1FirstTag) {
                            str += 'd1/' + block1FirstTag + '/';
                        }
                        if (block2FirstTag) {
                            str += 'd2/' + block2FirstTag + '/';
                        }
                        if (block3FirstTag) {
                            str += 'd3/' + block3FirstTag + '/';
                        }

                        setTimeout(function () {
                            $scope.$apply(function () {
                                $scope.thisUrl = str;
                            })
                        }, 0);

                    },


                    /**
                     * 传入block，返回 是否 default
                     * 15/12/29 */

                    trueDefault: function (blockName) {
                        var block = document.getElementById(blockName);
                        var e = angular.element(block);
                        var firstTag = e[0].firstElementChild.nodeName;
                        var re = false;
                        switch (blockName) {
                            case 'block1':
                                (firstTag == 'DEFAULT1') ? re = false : re = firstTag;
                                break;
                            case 'block2':
                                (firstTag == 'DEFAULT2') ? re = false : re = firstTag;
                                break;
                            case 'block3':
                                (firstTag == 'DEFAULT3') ? re = false : re = firstTag;
                                break;
                        }
                        return re;
                    },


                    init: function () {
                        this.eachDefault();
                    }
                }

                fun.init();
            },
            link: function (scope, element, attrs) {

            }
        }

    })
})