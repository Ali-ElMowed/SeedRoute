<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plant;

class PlantController extends Controller
{
    //function to get a targeted plant by ID or all plants
    public function getPlants($id = null)
    {
        if ($id != null) {
            $plants = Plant::find($id);
        } else {
            $plants = Plant::all();
        }

        return jsonResponse("plants found", 200, $plants);
    }

    //function to add plant 
    public function addPlant(Request $request)
    {
        $plant = new Plant;

        $plant->name = $request->name;
        $plant->growth_duration = $request->growth_duration;
        $plant->watering = $request->watering;
        $plant->type = $request->type;
        $plant->soil_type = $request->soil_type;
        $plant->number_of_phases = $request->number_of_phases;
        $plant->save();

        return jsonResponse("plant added", 200);
    }

    //function to delete plant 
    public function destroyPlant($id)
    {

        $plant = Plant::find($id);

        if ($plant) {
            $plant->delete();

            return jsonResponse("Plant deleted", 200);
        } else {
            return jsonResponse("Plant not found", 404);
        }
    }

    //function to update plant
    public function updatePlant(Request $request, $id)
    {

        $plant = Plant::find($id);

        if ($plant) {

            $plant->name = $request->name;
            $plant->growth_duration = $request->growth_duration;
            $plant->watering = $request->watering;
            $plant->type = $request->type;
            $plant->soil_type = $request->soil_type;
            $plant->number_of_phases = $request->number_of_phases;
            $plant->update();

            return jsonResponse("Plant updated", 200);
        } else {
            return jsonResponse("Plant not found", 404);
        }
    }
}
