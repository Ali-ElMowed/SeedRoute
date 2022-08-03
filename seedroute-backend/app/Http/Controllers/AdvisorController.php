<?php

namespace App\Http\Controllers;

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
}
