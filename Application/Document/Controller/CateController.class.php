<?php

namespace Document\Controller;

use Think\Controller;
use Document\Server\CateServer as cateServer;

class CateController extends Controller
{
    /** 添加一级分类 */
    function itemAdd()
    {
        $re = array();
        if (cateServer::addArrPost($_POST)) {
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
        $re = cateServer::showAll();
        $this->ajaxReturn($re);
    }

    /** editOneCate */
    function editOneCate()
    {
        $re = cateServer::editOneCate();
        $this->ajaxReturn($re);
    }

    /** delOneCate */
    function delOneCate()
    {
        $re = cateServer::delOneCate();
        $this->ajaxReturn($re);
    }

    /** add twoCate */
    function addTwoCat()
    {
        $re = cateServer::addTwoCat();
        $this->ajaxReturn($re);
    }

    /** get twoCate */
    function getTwoCate()
    {
        $re = cateServer::getTwoCate();
        $this->ajaxReturn($re);
    }

    /** getOneAndT */
    function getOneAndTwo(){
        $re = cateServer::getOneAndTwo();
        $this->ajaxReturn($re);

    }
}