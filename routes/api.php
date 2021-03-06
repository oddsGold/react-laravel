<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('register', 'App\Http\Controllers\AuthController@register');

});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::group([
        'middleware' => 'jwt.auth'
    ], function($router) {
        Route::post('logout', 'App\Http\Controllers\AuthController@logout');
        Route::post('me', 'App\Http\Controllers\AuthController@me');
        Route::patch('update', 'App\Http\Controllers\AuthController@update');
        Route::post('image/upload', 'App\Http\Controllers\ImagesController@uploadImage');
    });

});

