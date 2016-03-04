<?php

namespace Document\Controller;

use Think\Controller;
use Document\Server\ContentServer as itemServer;

class ContentController extends Controller
{
    /** 添加content */
    function addContent()
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

    /** get all conetn */
    function getContentList()
    {
        $re = itemServer::showAll();
        $this->ajaxReturn($re);
    }

    /** get one conetn */
    function getContent()
    {
        $re = itemServer::getContent();
        $this->ajaxReturn($re);
    }

    /** edit */
    function editContent()
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

    /** search */
    function search()
    {
        $re = itemServer::search();
        $this->ajaxReturn($re);
    }

}