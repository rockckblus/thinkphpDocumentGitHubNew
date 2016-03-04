define(function (require) {



    //tools
    require('/Public/js/app/Document/publicDirective/js/compileClick.js');//compileClick 绑定点击事件 动态改变对应 div 的 directive
    require('/Public/js/app/Document/publicDirective/js/plguin/editer/editer.js');//编辑模板


    //front
    require('/Public/js/app/Document/publicDirective/js/front/default.js');//default 首页 block1 2 3
    require('/Public/js/app/Document/publicDirective/js/front/listThree.js');//default 首页 block1 2 3
    require('/Public/js/app/Document/publicDirective/js/front/oneThree.js');//default 首页 block1 2 3
    require('/Public/js/app/Document/publicDirective/js/front/content.js');//default 首页 block1 2 3

//topHeader
    require('/Public/js/app/Document/publicDirective/js/topHeader.js');//topHeader 顶部导航
    require('/Public/js/app/Document/publicDirective/js/itemList.js');//项目list
    require('/Public/js/app/Document/publicDirective/js/thiUrl.js');//thisUrl

    //search
    require('/Public/js/app/Document/publicDirective/js/front/search.js');//search

//    admin相关
    require('/Public/js/app/Document/publicDirective/js/admin/adminItemList.js');//amdin功能列表
    require('/Public/js/app/Document/publicDirective/js/admin/adminItemListMember.js');//amdin功能列表

    /**
     * item
     * 16/1/8 */
    require('/Public/js/app/Document/publicDirective/js/admin/itemAdd.js');//项目添加
    require('/Public/js/app/Document/publicDirective/js/admin/itemEdit.js');//项目edit


    /**
     * cate
     * 16/1/8 */
    require('/Public/js/app/Document/publicDirective/js/admin/oneCatAdd.js');//一级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/twoCatAdd.js');//2级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/twoCatAddIn.js');//2级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/threeCatAdd.js');//3级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/threeCatAddIn.js');//3级分类添加 directive

    /**
     * content
     * 16/1/8 */
    require('/Public/js/app/Document/publicDirective/js/admin/adminContentList.js');//3级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/adminContentAdd.js');//3级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/adminContentEdit.js');//3级分类添加 directive
    require('/Public/js/app/Document/publicDirective/js/admin/adminContentEditIn.js');//3级分类添加 directive


})