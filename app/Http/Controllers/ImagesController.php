<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\User;
use App\Models\News;
use Illuminate\Support\Facades\Validator;

class ImagesController extends Controller
{

    const IMAGE_PATH = '/uploads/';

    public function index()
    {

    }

    public function show(Image $image)
    {

    }

    public function store(Request $request)
    {

    }

    public function update(Request $request, Image $image)
    {

    }

    public function delete(Image $image)
    {

    }

    public function uploadImage(Request $request) {

        $validator = Validator::make($request->all(), [
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 403);
        }

        if($request->hasFile('file')) {
            $image = $request->file('file');
            $name = $image->getClientOriginalExtension();
            $size = $image->getSize();
            $destinationPath = public_path().self::IMAGE_PATH.date('Y').'/'.date('m');
            $filename = substr(md5(microtime() . rand(0, 9999)), 0, 32) . '.' . $name;
            $image->move($destinationPath, $filename);

            $user = User::find($request->id);

            if($user) {
                $image = $user->image()->create([
                    'image_name'=>$filename,
                    'path'=>self::IMAGE_PATH.date('Y').'/'.date('m').'/',
                    'size'=>$size
                ]);
                return response()->json($image);
            }else {
                $news = News::find($request->id);
                $image = $news->image()->create([
                    'image_name'=>$filename,
                    'path'=>self::IMAGE_PATH.date('Y').'/'.date('m').'/',
                    'size'=>$size
                ]);
                return response()->json($image);
            }

        }
    }
}
