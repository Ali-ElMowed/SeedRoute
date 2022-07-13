<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Calendar;

class CalendarController extends Controller
{
    //function to get a targeted calendar by ID or all calndars
    public function getCalendars($id = null){
        if($id != null){
            $calendars = Calendar::find($id);
        }
        else{
            $calendars = Calendar::all();
        }

        return self::returnResponse("calendars found",200,$calendars);
    }

     //function to add calendar 
     public function addCalendar(Request $request){
        $calendar = new Calendar;

        $calendar -> block_id = $request -> block_id;
        $calendar -> date = $request -> date;
        $calendar -> phase = $request -> phase;
        $calendar -> watering = $request -> watering;
        $calendar -> watering_time = $request -> watering_time;
        $calendar -> save();

        return self::returnResponse("calendar added",200);

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
