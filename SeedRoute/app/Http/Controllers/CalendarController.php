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
     //function to be used in all functions for response return
     public function returnResponse($status,$code,$data = null)
     {
         return response()->json([
             'status'=>$status,
             'data' => $data     
         ],$code);
     }
}
