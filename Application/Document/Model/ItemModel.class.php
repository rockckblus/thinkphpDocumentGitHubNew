<?php

namespace Document\Model;

use Think\Controller;
use Document\Model\ItemModel as me;

class ItemModel extends Controller
{

    private $thisItem;

    public function init()
    {
        $this->thisItem = D('Mongo/Item');//实例项目模型
    }

    /** 项目添加一条数据 */
    function add($item)
    {
        me::init();
        $re = $this->thisItem->add($item);//添加传来的数据
        return $re;
    }


    /** show */
    function showAll()
    {
        me::init();

        $re = $this->thisItem->select();
        return $re;
    }

    /**publicShowAll */
    function publicShowAll()
    {
        me::init();
        $where['public'] = true;
        $re = $this->thisItem->where($where)->select();
        return $re;
    }


    /** edit */
    function editItem()
    {
        me::init();
        $where['_id'] = $_POST['_id'];
        unset($_POST['_id']);
        $re = $this->thisItem->where($where)->save($_POST);
        return $re;
    }

    /** del */
    function delItem()
    {
        me::init();
        $where['_id'] = $_POST['_id'];
        $re = $this->thisItem->where($where)->delete();
        return $re;
    }
}