<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlantController;

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

Route::get('/getPlants/{id?}',[PlantController::class,'getPlants']);
Route::post('/addPlant',[PlantController::class,'addPlant']);
Route::delete('/deletePlant/{id}',[PlantController::class,'destroyPlant']);
Route::post('/updatePlant/{id}',[PlantController::class,'updatePlant']);
