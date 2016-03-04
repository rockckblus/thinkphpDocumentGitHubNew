define(function (require) {
    var g = require('/Public/js/app/Public/g.js');
    var tools = require('/Public/js/app/Public/tools.js');
    require('/Public/js/app/Document/Index/server/item.js');//item
    g.app.factory('truePass', function (itemData) {
            var reObj = {
                isPass: false,

                /**
                 * truePass,
                 * 16-1-3 */
                truePass: function (fun) {
                    itemData.truePass(function (re) {
                        if (re.state) {
                            reObj.isPass = true;
                            if (fun) {
                                fun(re);
                            }
                        }
                    })
                },
            }

            return reObj;
        }
    )
})
