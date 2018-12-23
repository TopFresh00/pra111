<?php

Use App\MyUser;

Route::get('/', function () {
    return //$blogUsers = DB::table('my_users')->get();
        view('welcome');
});
Route::get('users/edit', function () {
    return view('welcome');
});
Route::get('users', function () {
    return view('welcome');
});
Route::get('users/add', function () {
    return view('welcome');
});
Route::get('users/remove', function () {
    return view('welcome');
});
