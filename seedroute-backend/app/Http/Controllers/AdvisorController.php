<?php

namespace App\Http\Controllers;

use App\Models\Advisor;
use App\Models\User;
use Illuminate\Http\Request;

class AdvisorController extends Controller
{
    //
    public function getAdvisors($id = null)
    {
        if ($id != null) {
            $advisor = User::where('is_advisor','=', 1)->where('id','=',$id)->first();
        } else {
            $advisor = User::where('is_advisor','=', 1)->get();
        }

        return jsonResponse("plants found", 200, $advisor);
    }
    public function addAdvisor(Request $request)
    {
        $advisor = User::where('email',$request->email)->get();

        $advisor->is_advisor = 1;
        $advisor->bio = $request->bio;
        $advisor->job = $request->job;
        $advisor->ex_years = $request->ex_years;
        $advisor->update();
        return jsonResponse("Advisor Made", 200);
    }

    //function to delete plant
    public function destroyAdvisor($id)
    {

        $advisor = User::find($id);

        if ($advisor) {
            $advisor->delete();

            return jsonResponse("ad$advisor deleted", 200);
        } else {
            return jsonResponse("ad$advisor not found", 404);
        }
    }
}
