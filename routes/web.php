<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::any('/admin/{path?}', 'App\Http\Controllers\ProductsController@index')->where('admin', '(.*)?');

Route::prefix('api')->group(function() {
    Route::get('getMenus', 'App\Http\Controllers\MenusController@index');
});
