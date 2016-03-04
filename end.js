angular.module('myApp', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/Public/js/app/Document/publicDirective/html/itemList.html',
    "<div class=\"itemListTitle linkMouse\" ng-click=\"fun.itemListTitleClick()\"><i class=\"icon-hand-up\"></i> 项目列表 {{ui.listItemTitleIcon}}</div>\n" +
    "<div class=\"listItem\" ng-show=\"ui.listItemDiv\">\n" +
    "    <li  ng-repeat=\"vo in item\" class=\"linkMouse\" ng-click=\"fun.changeThisItem(vo)\">\n" +
    "        {{vo.name | toHtml}}\n" +
    "    </li>\n" +
    "</div>\n"
  );


  $templateCache.put('/Public/js/app/Document/publicDirective/html/thisUrl.html',
    "<div class=\"left\" style=\"position: fixed;\n" +
    "    margin-top: 1px;\n" +
    "    right: 3px;\n" +
    "    font-size: 9px;\n" +
    "    line-height: 9px;\n" +
    "    color: #D4D0D0;\">{{thisUrl}}\n" +
    "</div>"
  );


  $templateCache.put('/Public/js/app/Document/publicDirective/html/topHeader.html',
    "<div class=\"topHeader\">\n" +
    "    <div id=\"leftLogo\" class=\"linkMouse\" onclick=\"location.reload();\">{{topHeader.item.thisItem}}</div>\n" +
    "    <div id=\"rightHeader\" class=\"\">\n" +
    "        <div class=\"search left\">\n" +
    "            <input type=\"text\" ng-model=\"search\"/>\n" +
    "            <button class=\"btn btn-default btn-inverse\" complie-click divId=\"block2\" tag=\"search\" urlItem=\"{{search}}\"\n" +
    "                    title=\"{{search}} 搜索\">搜索\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"left \" style=\"margin-left: 30px;margin-top: 10px\">\n" +
    "            <input class=\"left \" type=\"text\" style=\"width: 100px\" ng-model=\"passWord\"/>\n" +
    "            <button class=\"btn btn-default btn-inverse\" style=\"margin-left: 10px\" ng-click=\"sub()\">adminPassWord\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <this-url></this-url>\n" +
    "        <div class=\"right linkMouse\" ng-show=\"amdinShow\" complie-click divId=\"block1\" tag=\"{{adminTag}}\"\n" +
    "             style=\"margin-top: 13px;margin-right: 200px\">\n" +
    "            <i class=\"icon-adjust\"></i>admin\n" +
    "        </div>\n" +
    "        <div class=\"listRight\">\n" +
    "            <item-list></item-list>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);

angular.module('myApp', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/Public/js/app/Document/publicDirective/html/front/content.html',
    "<div class=\"clear editDiv\">\n" +
    "    <div class=\"clear\">\n" +
    "        <h5>{{content.name}}</h5>\n" +
    "\n" +
    "        <div class=\"clear\" style=\"margin-right: 20px\" ng-bind-html=\"content.content | toHtml\" >\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <hr/>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/Public/js/app/Document/publicDirective/html/front/default1.html',
    "<div class=\"clear editDiv\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"clear\" ng-repeat=\"vo1 in list\">\n" +
    "        <div class=\"clear\" ng-if=\"(vo1.pid == '0') && vo1.name\">\n" +
    "            <h5 style=\"margin-left: 10px\">{{vo1.name}}</h5>\n" +
    "\n" +
    "\n" +
    "            <div class=\"clear\" ng-if=\"vo2.pid == vo1._id\" ng-repeat=\"vo2 in list\">\n" +
    "                <h6 class=\"linkMouse h6Left \" ng-click=\"UI.chickThis($event)\" complie-click divId=\"block2\"\n" +
    "                    tag=\"list-three\" urlitem=\"{{vo2._id}}\"\n" +
    "                        >{{vo2.name}}</h6>\n" +
    "\n" +
    "\n" +
    "                <div class=\"clear\" style=\"margin-left: 20px\" ng-if=\"vo3.pid == vo2._id\" ng-repeat=\"vo3 in list\">\n" +
    "                    <span class=\"linkMouse h6Left\" style=\"font-size: 12px\" ng-click=\"UI.chickThis($event)\" complie-click\n" +
    "                          divId=\"block2\"\n" +
    "                          tag=\"one-three\" title=\"{{vo3.name}}\" urlitem=\"{{vo3._id}}\">{{vo3.name}}</span>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <hr ng-if=\"vo1.pid == '0'\"/>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/Public/js/app/Document/publicDirective/html/front/listThree.html',
    "<div class=\"clear editDiv\">\n" +
    "    <div class=\"clear\" ng-repeat=\"vo in list\">\n" +
    "        <h5>{{vo.name}}</h5>\n" +
    "\n" +
    "        <div class=\"clear\" style=\"margin-left: 20px\" ng-if=\"vo._id == vo2.catId\" ng-repeat=\"vo2 in contentList\">\n" +
    "        <span class=\"linkMouse h6Left\" style=\"font-size: 12px\" ng-click=\"UI.chickThis($event)\" complie-click\n" +
    "              divId=\"block3\"\n" +
    "              tag=\"content\" urlitem=\"{{vo2._id}}\" title=\"{{vo2.name}}\">{{vo2.name}}</span>\n" +
    "              <hr/>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <hr/>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/Public/js/app/Document/publicDirective/html/front/oneThree.html',
    "<div class=\"clear editDiv\">\n" +
    "    <div class=\"clear\">\n" +
    "        <h5>{{title}}</h5>\n" +
    "\n" +
    "        <div class=\"clear\" style=\"margin-left: 20px\" ng-if=\"threeCatId == vo2.catId\" ng-repeat=\"vo2 in contentList\">\n" +
    "        <span class=\"linkMouse h6Left\" style=\"font-size: 12px\" ng-click=\"UI.chickThis($event)\" complie-click\n" +
    "              divId=\"block3\"\n" +
    "              tag=\"content\" urlitem=\"{{vo2._id}}\">{{vo2.name}}</span>\n" +
    "              <hr/>\n" +
    "        </div>\n" +
    "\n" +
    "        <hr/>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/Public/js/app/Document/publicDirective/html/front/search.html',
    "<div class=\"clear editDiv\">\n" +
    "    <h5>{{title}}</h5>\n" +
    "\n" +
    "    <!--<div class=\"clear\" ng-repeat=\"vo in list.cate\">-->\n" +
    "        <!--<div class=\"clear\" style=\"margin-left: 20px\">-->\n" +
    "        <!--<span class=\"linkMouse h6Left\" style=\"font-size: 12px\" ng-click=\"UI.chickThis($event)\" complie-click-->\n" +
    "              <!--divid=\"block2\" tag=\"one-three\"-->\n" +
    "              <!--urlitem=\"{{vo._id}}\" title=\"{{vo.name}}\">{{vo.name}}</span>-->\n" +
    "        <!--</div>-->\n" +
    "\n" +
    "        <!--<hr/>-->\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <div class=\"clear\" ng-repeat=\"vo in list.contentName\">\n" +
    "        <div class=\"clear\" style=\"margin-left: 20px\">\n" +
    "        <span class=\"linkMouse h6Left\" style=\"font-size: 12px;color: #002a80\" ng-click=\"UI.chickThis($event)\"\n" +
    "              complie-click\n" +
    "              divId=\"block3\"\n" +
    "              tag=\"content\" urlitem=\"{{vo._id}}\" title=\"{{vo.name}}\">cate::{{vo.name}}</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <hr/>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"height\">\n" +
    "        <div class=\"clear\" ng-repeat=\"vo in list.content\">\n" +
    "            <div class=\"clear\" style=\"margin-left: 20px\">\n" +
    "                <span class=\"clear\" style=\"color: #002a80\">{{vo.name}}</span>\n" +
    "        <span class=\"linkMouse h6Left\" style=\"font-size: 12px;color: red\"\n" +
    "              ng-bind-html=\"vo.content | toHtml\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <hr/>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

}]);
