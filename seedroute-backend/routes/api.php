<?php

use App\Http\Controllers\AdvisorController;
use App\Http\Controllers\BlockController;
use App\Http\Controllers\CalendarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlantController;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [JWTController::class, 'register']);
Route::post('/login', [JWTController::class, 'login'])->name('login');

Route::group(['middleware' => 'auth:api'], function ($router) {
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::get('/profile', [JWTController::class, 'profile']);

    //Plants routes by users
    Route::get('/getPlants/{id?}', [PlantController::class, 'getPlants']);

    //blocks by users
    Route::get('getBlocks', [BlockController::class, 'getBlocks']);
    Route::post('storeBlocksSelected', [BlockController::class, 'storeBlocks']);
    Route::get('getSelectedBlocks/{id?}', [BlockController::class, 'getSelectedBlocks']);
    Route::post('/doPlant', [BlockController::class, 'doPlant']);

    //advisors routes by user
    Route::get('getAdvisor/{id?}', [AdvisorController::class, 'getAdvisors']);

    //users routes by usrer
    Route::put('/updateUser', [JWTController::class, 'updateUserTest']);


    //admin users 
    Route::group(['middleware' => 'admin'], function () {
        Route::post('/addPlant', [PlantController::class, 'addPlant']);
        Route::delete('/deletePlant/{id}', [PlantController::class, 'destroyPlant']);
        Route::post('/updatePlant/{id}', [PlantController::class, 'updatePlant']);
        Route::post('/addAdvisor', [AdvisorController::class, 'addAdvisor']);
        Route::delete('/deleteAdvisor/{id}', [CalendarController::class, 'destroyAdvisor']);
    });
});
