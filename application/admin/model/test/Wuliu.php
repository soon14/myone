<?php

namespace app\admin\model\test;

use think\Model;


class Wuliu extends Model
{

    

    

    // 表名
    protected $name = 'wuliu';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    

    protected static function init()
    {
        self::afterInsert(function ($row) {
            $pk = $row->getPk();
            $row->getQuery()->where($pk, $row[$pk])->update(['status' => $row[$pk]]);
        });
    }

    

    public static function getStatusList(){
        $statusList = [
            '1'=>'正常',
            '0'=>'隐藏'
        ];
        return $statusList;
    }





}
