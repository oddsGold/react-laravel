<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Menu extends CustomModel
{
    public $timestamps = true;
    protected $table = 'admin_menu';
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'model',
        'priority',
        'icon',
        'url',
        'parent'
    ];

    public static function generateMenu($menus, $index = false){
        $temp = array();
        foreach($menus as $k => $m){
            if($m->parent != null){
                foreach($temp as $key => $t){
                    if($t['id'] == $m->parent){
                        array_push($temp[$key]['child'],array(
                            'title' => $m->title,
                            'url' => $m->url,
                            'icon' => $m->icon,
//                            'url' => '$m->generateUrl()',
                        ));
                    }
                }
            }else{
                array_push($temp, array(
                    'id' => $m->id,
                    'title' => $m->title,
                    'url' => $m->url,
                    'icon' => $m->icon,
//                    'url' => '$m->generateUrl()',
                    'child' => array()
                ));
            }
        }
        return $temp;
    }

    public static function allWithUrlToArray(){
        return self::generateMenu(self::all()->sortBy('priority'));
    }
}
