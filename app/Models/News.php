<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class News extends CustomModel
{
    public $timestamps = true;
    protected $table = 'news';
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i'
    ];

    protected $fillable = [
        'id',
        'url',
        'lang_id',
        'title',
        'keywords',
        'description',
        'text',
        'views',
        'published',
        'modified_by',
        'created_by',
        'created_at'
    ];

    public static function getNews(){
        $news = self::query()->orderBy('id', 'asc')->paginate(request()->query('count', 5));
        return response($news, 200);
    }

    public static function currentNews($id){
        return News::query()->where('id',  $id)->first();
    }
}
