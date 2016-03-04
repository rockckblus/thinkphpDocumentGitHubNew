<?php

namespace Document\Server;

use Document\Model\ContentModel;
use Document\Model\CateModel;
use Document\Server\ContentServer as me;


use Think\Controller;

class ContentServer extends Controller
{
    /** 增删改查 详情,目前是物流帮app */
    function add($post)
    {
        $post['itemId'] = cookie('itemId');
        if (!empty($post['content'])) {
            $re = ContentModel::add($post);
            if ($re) {
                return re;
            } else {
                return false;
            }
        } else {
            return false;
        };
    }

    function showAll()
    {
        return ContentModel::showAll();
    }

    function getContent()
    {
        return ContentModel::getContent();
    }

    function editItem()
    {
        return ContentModel::editItem();
    }

    function delItem()
    {
        return ContentModel::delItem();
    }

    function search()
    {
        $CateSearch = CateModel::search();
        $ContentSearch = ContentModel::search();
        $ContentNameSearch = ContentModel::searchName();
        $re['cate'] = $CateSearch;
        $re['content'] = $ContentSearch;
        $re['contentName'] = $ContentNameSearch;
        return $re;
    }

}