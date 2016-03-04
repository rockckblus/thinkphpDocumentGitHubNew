<?php namespace Home\Controller;

use Think\Controller;

class IndexController extends Controller
{
    public function index()
    {
        /** 测试post */
        $aa['ab'] = 11;
        $aa['bb'] = 22;
        $this->ajaxReturn($aa, 'JSON');
    }

    function post()
    {
        $this->display();
    }


    //用户头像上传方法
    function postUserHeader()
    {
        $re = [];
        $re['img'] = 'http://192.168.0.3/thinkphp/Public/logo.png';
        $re['postImg'] = $_POST['img'];
        $re['state'] = 1;
        $this->ajaxReturn($re,'JSON');
    }

}