<?php
return array(
    //'配置项'=>'配置值'
    'db_type' => 'mongo',
    'db_host' => '182.92.170.127',
    'db_port' => '27017',
    'db_Name' => 'document',
//    'DB_USER' => 'rockblus', // 用户名
//    'DB_PWD' => 'HDZrockblus8', // 密码
    'MODULE_ALLOW_LIST' => array(
        'Home', 'Document','Mongo'
    ),
    'DEFAULT_MODULE' => 'Document'
);