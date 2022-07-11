<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Plant;
use Symfony\Component\HttpFoundation\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    //function to get a targeted plant by ID or all plants
    public function getPlants($id = null){
        if($id != null){
            $plants = Plant::find($id);
        }
        else{
            $plants = Plant::all();
        }

        return self::returnResponse("plants found",200,$plants);
    }

    //function to add plant 
    public function addPlant(Request $request){
        $plant = new Plant;

        $plant -> name = $request -> name;
        $plant -> growth_duration = $request -> growth_duration;
        $plant -> watering = $request -> watering;
        $plant -> type = $request -> type;
        $plant -> soil_type = $request -> soil_type;
        $plant -> number_of_phases = $request -> number_of_phases;
        $plant -> save();

        return self::returnResponse("plant added",200);

    }

    //function to be used in all functions for response return
    public function returnResponse($status,$code,$data = null)
    {
        return response()->json([
            'status'=>$status,
            'data' => $data     
        ],$code);
    }
}
