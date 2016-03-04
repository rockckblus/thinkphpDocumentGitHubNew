<?php

namespace Document\Model;

use Think\Controller;
use Document\Model\ContentModel as me;


class ContentModel extends Controller
{

    private $thisItem;

    public function init()
    {
        $this->thisItem = D('Mongo/Content');//实例Content模型
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
        $where['itemId'] = cookie('itemId');
        $re = $this->thisItem->field('name,catId,itemId')->select();
        return $re;
    }

    /** getContent */
    function getContent()
    {
        me::init();
        $where['_id'] = $_POST['id'];
        $re = $this->thisItem->where($where)->find();
        return $re;

    }

    /** edit */
    function editItem()
    {
        me::init();
        $where['_id'] = $_POST['id'];
        unset($_POST['id']);
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

    /** search */
    function search()
    {
        me::init();
        $where['content'] = array('like', $_POST['key']);
        $where['itemId'] = cookie('itemId');
        $re = $this->thisItem->where($where)->select();
        return $re;
    }

    /** searchName */
    function searchName()
    {
        me::init();
        $where['name'] = array('like', $_POST['key']);
        $where['itemId'] = cookie('itemId');
        $re = $this->thisItem->where($where)->select();
        return $re;
    }
}