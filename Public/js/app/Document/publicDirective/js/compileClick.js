/**
 * 公共点击事件载入新directive
 * 15/12/28 */
define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
//    require('/Public/js/app/Document/publicDirective/js/admin/itemAdd.js');
    g.app.directive('complieClick', function () {
        return {
            restrict: 'A',//E:包裹标签  A:属性 C:class
            scope: {},
            //require:其他directive,
            //replace:false,
            //template:<div></div>,
            controller: function ($scope, $compile) {

                /**
                 * 传入damId（在domIdDiv里面插入directive）, 需要插入的directive 标签名字
                 * 15/12/28 */
                $scope.changeDirective = function (domId, directiveTag, urlItem, title, editUrl, delUrl) {
                    var _editUrl = '', _delUrl = '';
                    if (editUrl) {
                        _editUrl = editUrl;
                    }
                    if (delUrl) {
                        _delUrl = delUrl;
                    }
                    try {
                        var domDiv = document.getElementById(domId);
                        var domDivElement = angular.element(domDiv);
                        domDivElement.html('');//清空指定di的div
                        var el = $compile("<" + directiveTag + " " + "urlItem='" + urlItem + "'\" title='" + title + "' editUrl='" + _editUrl + "' delUrl='" + _delUrl + "'></" + directiveTag + ">")($scope);//动态加载新的 directive
                        domDivElement.append(el);
                        $scope.$emit('changeThisUrl'); //向父域发射变换Url事件;
                    } catch (e) {
                        console.error(e);
                    }
                }

            },
            link: function (scope, element, attrs, rCtrl) {
                element.bind('click', function () {
                    try {
                        var domId = attrs.divid;
                        var directiveTag = attrs.tag;
                        var urlItem = attrs.urlitem;
                        var title = attrs.title;
                        var editUrl = attrs.editurl;
                        var delUrl = attrs.delurl;
                        scope.changeDirective(domId, directiveTag, urlItem, title,editUrl,delUrl);
                    } catch (e) {
                        console.error(e);
                    }
                })
            }
        }
    });
})