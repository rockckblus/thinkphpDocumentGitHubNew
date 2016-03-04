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
