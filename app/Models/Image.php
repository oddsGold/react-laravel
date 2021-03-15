<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Image extends CustomModel
{
    public $timestamps = true;
    protected $table = 'images';
    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
        'updated_at' => 'datetime:d-m-Y H:i'
    ];

    use HasFactory;

    protected $fillable = [
        'image_id',
        'imagesable_id',
        'imageable_type',
        'image_name',
        'path',
        'size',
        'created_at',
        'updated_at'
    ];

    public function imageable(){
        return $this->morphTo();
    }


}
