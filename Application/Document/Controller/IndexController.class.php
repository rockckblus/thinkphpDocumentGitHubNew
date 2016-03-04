<?php

namespace Document\Controller;

use Think\Controller;
use Document\Server\FunController as Tools;

class IndexController extends Controller
{
    function index()
    {

        $leftNav1 = $_GET['d1'];
        $leftNav2 = $_GET['d2'];
        $leftNav3 = $_GET['d3'];

        if (!empty($leftNav1)) {
            $str1 = "<" . $leftNav1 . "></" . $leftNav1 . ">";
        } else {
            $str1 = "<default1></default1>";
        }
        if (!empty($leftNav2)) {
            $str2 = "<" . $leftNav2 . "></" . $leftNav2 . ">";
        } else {
            $str2 = "<default2></default2>";
        }
        if (!empty($leftNav3)) {
            $str3 = "<" . $leftNav3 . "></" . $leftNav3 . ">";
        } else {
            $str3 = "<default3></default3>";
        }

        $this->assign('d1', $str1);
        $this->assign('d2', $str2);
        $this->assign('d3', $str3);

        $this->display();
    }


    function buildDoc()
    {
        Tools::buildDoc('/work/5656AppNewEnd/5656App/', 'index');
    }


}