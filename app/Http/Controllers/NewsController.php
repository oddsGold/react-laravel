<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;

class NewsController extends Controller
{
    public function index()
    {
        return News::getNews();
    }

    public function show($id) {
        $news = News::with('newsImage')->with('categories')->findOrFail($id);

        return $news;
    }

    public function update(Request $request){

//        $validator = Validator::make($request->all(), [
//            'name' => 'required|max:255',
//            'email' => 'required|unique:users|max:255'
//        ]);
//
//        if ($validator->fails()) {
//            return response()->json(['errors' => $validator->errors()->all()], 403);
//        }

        $input = $request->all();

        News::find($input['id'])->update($input);
        return response('update', Response::HTTP_ACCEPTED);
    }

}
