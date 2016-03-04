define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    require('/end.js'); //angular
    require('/Public/js/app/Document/publicDirective/js/public.js');//topHeader

    g.app.controller('allDiv', function ($scope, $compile) {

        $scope.$on('changeThisUrl', function () {// 监听 子域 发射来的事件
            $scope.$broadcast('changeThisUrlFromTop');//像子域广播变换url事件
        })



    })

})
