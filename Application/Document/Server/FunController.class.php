<?php

namespace Document\Server;

use Think\Controller;

class FunController extends Controller
{

    /** 生成Doc文档 传入path*/
   public function buildDoc($path)
    {
        if ($path) {
            $this->buildHtml('doc.html', $path, 'index');
        }
    }
}