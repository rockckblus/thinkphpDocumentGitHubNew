<?php

namespace Document\Model;

use Think\Controller;
use Document\Model\CateModel as me;

class CateModel extends Controller
{

    private $thisItem;

    public function init()
    {
        $this->thisItem = D('Mongo/Cate');//实例项目模型
    }

    /** 项目添加一条数据 */
    function add($item)
    {
        me::init();
        $re = $this->thisItem->add($item);//添加传来的数据
        return $re;
    }

    /** del */
    function delOneCate()
    {
        if (me::trueOneCateHaveSubCate($_POST['_id'])) {//判断1级下面是否有分类 没有就是 true
            me::init();
            $where['_id'] = $_POST['_id'];
            $re = $this->thisItem->where($where)->delete();
            return $re;
        } else {
            $re['ok'] = 0;
            $re['msg'] = '有下级分类，请删除';
            return $re;
        }
    }


    /** show */
    function showAll()
    {
        me::init();
        $where['itemId'] = cookie('itemId');
        $where['pid'] = '0';
        $re = $this->thisItem->where($where)->select();
        return $re;
    }

    /** getTwoCate */
    function getTwoCate($oneCatId)
    {
        me::init();
        if (!empty($oneCatId)) {
            $where['pid'] = $oneCatId;
            $re = $this->thisItem->where($where)->select();
//            echo $this->thisItem->getLastSql();
            return $re;
        }
    }
    /** getTwoCateAll list */


    /** editOneCate */
    function editOneCate($itemId = null)
    {
        me::init();
        if (!empty($itemId)) {
            $where['itemId'] = $itemId;
            $where['_id'] = $_POST['_id'];
            unset($_POST['_id']);
            $re = $this->thisItem->where($where)->save($_POST);
            return $re;
        }
    }


    /** 传入的项目下面是否有分类 */
    function trueItemHaveCat($itemId = null)
    {
        if (!empty($itemId)) {
            me::init();
            $where['itemId'] = $itemId;
            $re = $this->thisItem->where($where)->find();
            if (!empty($re)) {//如果找到就返回 false
                return false;
            } else {
                return true;
            }
        }
    }

    /** 一级分类下面是否有分类 */
    function trueOneCateHaveSubCate($oneCateId)
    {
        if (!empty($oneCateId)) {
            me::init();
            $where['pid'] = $oneCateId;
            $re = $this->thisItem->where($where)->find();
            if (!empty($re)) {//如果找到就返回 false
                return false;
            } else {
                return true;
            }
        }
    }

    /** getOneAndTwoList 获取 1级 和 2级cat */
    function getOneAndTwoList()
    {
        me::init();
        $where['itemId'] = cookie('itemId');
        $re = $this->thisItem->where($where)->select();
        return $re;
    }

    /** search */
    function search()
    {
        me::init();
        $where['name'] = array('like', $_POST['key']);
        $where['itemId'] = cookie('itemId');
        $re = $this->thisItem->where($where)->select();
        return $re;
    }
}