<?php

namespace Document\Server;

use Document\Model\CateModel;
use Document\Server\CateServer as me;

use Think\Controller;

class CateServer extends Controller
{
    /** 增删改查 分类,目前是物流帮app */
    function add($post)
    {
        $re = CateModel::add($post);
        if ($re) {
            return re;
        } else {
            return false;
        }
    }

    function addArrPost()
    {
        if (isset($_POST)) {
            foreach ($_POST as $v) {
                me::add($v);
            }
            return true;
        } else {
            return false;
        }
    }

    function showAll()
    {
        return CateModel::showAll();
    }

    /** edit 一级分类 */
    function editOneCate()
    {
        return CateModel::editOneCate(me::getItemId());
    }

    /** del 一级分类 */
    function delOneCate()
    {
        return CateModel::delOneCate();
    }

    /** getItemId */
    protected function getItemId()
    {
        return cookie('itemId');
    }

    /** addTwoCat */
    function addTwoCat()
    {
        if (isset($_POST)) {
            foreach ($_POST as $v) {
                $v['itemId'] = cookie('itemId');
                $v['pid'] = $_POST['oneCatId'];
                me::add($v);
            }


            return true;
        } else {
            return false;
        }
    }

    /** getTwoCate */
    function  getTwoCate()
    {
        if (isset($_POST)) {

            return CateModel::getTwoCate($_POST['oneCatId']);

        } else {
            return false;
        }
    }

    /** getTwoAndOneList */
    function getOneAndTwo()
    {
        return CateModel::getOneAndTwoList();
    }
}