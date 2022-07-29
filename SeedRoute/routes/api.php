<?php

use App\Http\Controllers\BlockController;
use App\Http\Controllers\CalendarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlantController;
use App\Http\Controllers\JWTController;

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
Route::post('/login', [JWTController::class, 'login']);

Route::group(['middleware' => 'auth:api'], function ($router) {
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);

    //Plants routes

    Route::post('/addPlant', [PlantController::class, 'addPlant']);
    Route::delete('/deletePlant/{id}', [PlantController::class, 'destroyPlant']);
    Route::post('/updatePlant/{id}', [PlantController::class, 'updatePlant']);  
    Route::get('/getPlants/{id?}', [PlantController::class, 'getPlants']);

    //Calendars routes
    Route::get('/getCalendars/{id?}', [CalendarController::class, 'getCalendars']);
    Route::post('/addCalendar', [CalendarController::class, 'addCalendar']);
    Route::delete('/deleteCalendar/{id}', [CalendarController::class, 'destroyCalendar']);
    Route::post('/updateCalendar/{id}', [CalendarController::class, 'updateCalendar']);

    //blocks
    Route::get('getBlocks', [BlockController::class, 'getBlocks']);
    Route::post('storeBlocksSelected', [BlockController::class, 'storeBlocks']);
    Route::get('getSelectedBlocks/{id?}', [BlockController::class, 'getSelectedBlocks']);
});
