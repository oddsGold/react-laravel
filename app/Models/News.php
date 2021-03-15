<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class News extends CustomModel
{
    public $timestamps = true;
    protected $table = 'news';
    protected $guarded = [];
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i'
    ];

    protected $fillable = [
        'id',
        'url',
        'image_id',
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

    public function image(){
        return $this->morphOne(Image::class, 'imageable');
    }

    public function newsImage()
    {
        return $this->hasOne(Image::class, 'id', 'image_id');
    }

    public function categories(){
        return $this->morphToMany('App\Models\Category', 'categoryable');
    }

    public static function getNews(){
        $news = self::query()->orderBy('id', 'asc')->paginate(request()->query('count', 5));
        return response($news, 200);
    }

    public static function currentNews($id){
        return News::query()->where('id',  $id)->first();
    }
}
