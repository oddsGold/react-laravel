<?php

namespace App\Models;


use Illuminate\Support\Str;


class Category  extends CustomModel
{
    protected $table = 'categories';
    public $timestamps = true;

    protected $fillable = ['title', 'url', 'lang_id', 'created_by', 'modified_by'];


    protected static function boot()
    {
        parent::boot();

        static::creating(function($category) {
            $category->url = Str::slug(mb_substr($category->title, 0, 40). "-" . \Carbon\Carbon::now('Europe/Kiev')->format('dmyHi'),'-');
        });
    }

    public function articles(){
        return $this->morphedByMany('App\Models\News', 'categoryable');
    }
}
