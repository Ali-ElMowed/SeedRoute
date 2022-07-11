<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Plant;

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

    //function to be used in all functions for response return
    public function returnResponse($status,$code,$data = null)
    {
        return response()->json([
            'status'=>$status,
            'data' => $data     
        ],$code);
    }
}
