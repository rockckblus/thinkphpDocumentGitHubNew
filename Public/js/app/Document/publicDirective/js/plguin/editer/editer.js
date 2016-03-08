define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    g.app.directive('editer', function () {
        return {
            restrict: 'E',//E:包裹标签  A:属性 C:class
            scope: {},
            templateUrl: '/Public/js/app/Document/publicDirective/js/plguin/editer/html/editer.html',
            link: function (scope, element, attrs) {
                console.log('attrs',attrs);
                scope.myEditer = attrs.myediter;
                scope.content = attrs.content;
                console.log('attrsMyediter', attrs.myediter);
                setTimeout(function () {
                    scope.$apply(function () {
                        var um;
                        var umSet = function () {
                            um = UM.getEditor(attrs.myediter, {
                                //这里可以选择自己需要的工具按钮名称,此处仅选择如下七个
                                toolbar: ['source'],
                                //focus时自动清空初始化时的内容
                                autoClearinitialContent: true,
                                //关闭字数统计
                                wordCount: false,
                                //关闭elementPath
                                elementPathEnabled: false,
                                //默认的编辑区域高度
                                initialFrameHeight: 300
                                //更多其他参数，请参考umeditor.config.js中的配置项
                            });
                        }
                        umSet();
                        if (um) {
                            try {
                                um.destroy();
                            } catch (e) {
                                console.log(e);
                            }
                        }
                        umSet();
                    })
                }, 0);


                function subEdit() {
                    var content = UM.getEditor(attrs.myediter).getContent();
                    localStorage.setItem('content', content);
                }

                function setEdit() {
                    console.log('scopeContent',scope.content);
                    UM.getEditor(attrs.myediter).setContent(scope.content);
                }


                setTimeout(function () {
                    setEdit();
                }, 2000);

                document.getElementById('subMyEdit').addEventListener('click', function () {
                    subEdit();
                })


            }


        }
    })
})