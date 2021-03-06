<?php

namespace app\admin\model\cms;

use think\Model;

class Comment extends Model
{
    // 表名
    protected $name = 'cms_comment';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';

    // 追加属性
    protected $append = [
        'type_text',
        'status_text'
    ];


    public function getTypeList()
    {
        return ['archives' => __('Archives'), 'page' => __('Page')];
    }

    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }


    public function getTypeTextAttr($value, $data)
    {
        $value = $value ? $value : $data['type'];
        $list = $this->getTypeList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : $data['status'];
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }

    public function user()
    {
        return $this->belongsTo('\app\common\model\User', 'user_id', '', [], 'LEFT')->setEagerlyType(0);
    }

    public function archives()
    {
        return $this->belongsTo('Archives', 'aid', '', [], 'LEFT')->setEagerlyType(0);
    }

    /**
     * 关联单页模型
     */
    public function spage()
    {
        return $this->belongsTo("addons\cms\model\Page", 'aid', '', [], 'LEFT')->field('id,title,createtime')->setEagerlyType(0);
    }
}
