<?php

namespace Document\Controller;

use Think\Controller;
use Document\Server\ItemServer as itemServer;

class ItemController extends Controller
{
    /** 添加document项目 */
    function itemAdd()
    {
        $re = array();
        if (itemServer::add($_POST)) {
            $re['state'] = 1;
        } else {
            $re['state'] = 0;
            $re['msg'] = '添加失败';
        };
        $this->ajaxReturn($re);

    }

    /** Document 项目分类  */
    function getItem()
    {
        $re = itemServer::showAll();
        $this->ajaxReturn($re);
    }

    /** edit */
    function editItem()
    {
        $re = itemServer::editItem();
        $this->ajaxReturn($re);
    }

    /** del */
    function delItem()
    {
        $re = itemServer::delItem();
        $this->ajaxReturn($re);
    }

    /** truePass */
    function truePass()
    {
        $re = array();
        $passWord = cookie('passWord');
        if (isset($passWord)) {
            if ($passWord == 'HDZrockblus8') {
                /** 给admin标签，默认是空 */
                cookie('adminTag', 'admin-item-list');
                $re['state'] = true;
            } elseif ($passWord == '5656111') {
                /** 给管理员标签，默认是空 */
                cookie('adminTag', 'admin-item-list-member');
                $re['state'] = true;
            } else {
                $re['state'] = false;
            }
        } else {
            $re['state'] = false;
        }

        $this->ajaxReturn($re);

    }

}