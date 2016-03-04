/**
 * admin 功能列表 直接配置不进数据库
 * 15/12/29 */

define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    g.app.directive('adminItemList', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            //require:其他directive,
            replace: false,
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/html/admin/adminItemList.html',
            controller: function ($scope) {

                $scope.admin = {
                    category: [
                        {
                            id: 0,
                            name: '主项目',
                            divId: 'block2',
                            tag: 'admin-item-add'
                        },
                        {
                            id: 1,
                            name: '分类管理',
                            divId: 'block2',
                            tag: 'admin-one-cat-add'
                        },
                        {
                            id: 3,
                            name: '详情管理',
                            divId: 'block2',
                            tag: 'admin-one-cat-add'
                        },
                    ],

                    categoryTwo: [
                        {
                            id: 0,
                            name: '主项目添加',
                            title: '文档项目添加',
                            divId: 'block2',
                            tag: 'admin-item-add',
                            urlItem: 'addItem',
                            pid: 0
                        },
                        {
                            id: 1,
                            name: '主项目修改与删除',
                            title: '主项目修改与删除',
                            divId: 'block3',
                            tag: 'edit',
                            urlItem: 'edit',
                            editUrl: 'editItem',
                            delUrl: 'delItem',
                            pid: 0
                        },
                        {
                            id: 2,
                            name: '一级分类添加',
                            title: '一级分类添加',
                            divId: 'block2',
                            tag: 'admin-one-cat-add',
                            urlItem: 'addItem',
                            pid: 1
                        },
                        {
                            id: 3,
                            name: '一级分类修改删除',
                            title: '一级分类修改删除',
                            divId: 'block3',
                            tag: 'edit',
                            urlItem: 'oneCatList',
                            editUrl: 'editOneCate',
                            delUrl: 'delOneCate',
                            pid: 1
                        },
                        {
                            id: 4,
                            name: '二级分类添加修改删除',
                            title: '二级分类添加修改删除',
                            divId: 'block2',
                            tag: 'admin-two-cat-add',
                            urlItem: 'oneCatList',
                            pid: 1
                        },
                        {
                            id: 5,
                            name: '三级分类添加修改删除',
                            title: '三级分类添加修改删除',
                            divId: 'block2',
                            tag: 'admin-three-cat-add',
                            urlItem: 'twoCatList',
                            pid: 1
                        },
                        {
                            id: 6,
                            name: '详情添加',
                            title: '详情添加',
                            divId: 'block2',
                            tag: 'admin-content-list',
                            urlItem: 'contentList',
                            pid: 3
                        },
                        {
                            id: 7,
                            name: '详情修改删除',
                            title: '详情修改删除',
                            divId: 'block2',
                            tag: 'admin-content-edit',
                            urlItem: 'contentList',
                            pid: 3
                        },

                    ]
                }

                /**
                 * 公共ui方法
                 * 15-12-31 */
                var thisClickItem = '';
                $scope.UI = {
                    chickThis: function (event) {
                        if (thisClickItem) {
                            thisClickItem.removeClass('h6LeftThis');
                            var element = angular.element(event.target);
                            element.addClass('h6LeftThis');
                            thisClickItem = element;
                        } else {
                            var element = angular.element(event.target);
                            element.addClass('h6LeftThis');
                            thisClickItem = element;
                        }

                    }
                }

            },
            link: function (scope, element, attrs, rCtrl) {

            }
        }
    });
})

