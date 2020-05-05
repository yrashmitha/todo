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

Route::resource('task','TaskController');
Route::post('task/uc/{id}', 'TaskController@updateComplete');


//Route::get('task','TaskController@index');
//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
