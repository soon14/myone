<?php

// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

use think\Route;

//Route::get('admin','admin/index/index');//config禁用了admin

Route::rule('/get_list', 'api/Im/get_list');
Route::rule(':id', 'index/Article/index','get|post',['ext'=>'html'],['id'=>'\d+']);


return [
    //别名配置,别名只能是映射到控制器且访问时必须加上请求的方法
    '__alias__' => [

    ],
    //变量规则
    '__pattern__' => [
    ],
//        域名绑定到模块
//        '__domain__'  => [
//            'admin' => 'admin',
//            'api'   => 'api',
//        ],
];
