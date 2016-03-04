<?php

namespace Document\Server;

use Document\Model\ItemModel;
use Document\Model\CateModel;

use Think\Controller;

class ItemServer extends Controller
{
    /** 增删改查 项目分类,目前是物流帮app */
    function add($post)
    {
        $re = ItemModel::add($post);
        if ($re) {
            return re;
        } else {
            return false;
        }
    }

    function showAll()
    {
        if (cookie('passWord') == 'HDZrockblus8') {
            return ItemModel::showAll();
        }else{
            return ItemModel::publicShowAll();
        }
    }

    function editItem()
    {
        return ItemModel::editItem();
    }

    function delItem()
    {
        //判断item是否有下级分类 re.ok = 0 re.msg = '有下级分类，请先删除'
        $isHave = CateModel::trueItemHaveCat($_POST['_id']);
        if ($isHave) {
            return ItemModel::delItem();
        } else {
            $re['ok'] = 0;
            $re['msg'] = "有下级分类，请先删除";
            return $re;
        }
    }

}