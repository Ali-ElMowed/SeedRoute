<?php

namespace App\Http\Controllers;

use App\Models\Block;
use App\Models\BlockSelected;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class BlockController extends Controller
{

    //Function to get all blocks
    public function getBlocks()
    {
        try {
            $blocks =  Block::all();
            return jsonResponse('success', 200, $blocks);
        } catch (Exception $e) {
            return jsonResponse('error', 500, [$e->getMessage()]);
        }
    }


    //Function to store blocks selected by user
    public function storeBlocks(Request $request)
    {
        try {
            $data = [];
            foreach ($request->selected_blocks as $block) {
                if ($block['value']) {
                    $data[] = [
                        'user_id' => auth()->user()->id,
                        'name' => $block['name'],
                        'block_id' => $block['name'],
                    ];
                }
            }

            BlockSelected::insert($data);
            return jsonResponse('success', 201,$data);

        } catch (Exception $e) {
            return jsonResponse('error', 500, ["$e->getMessage()"]);
        }
    }


    //Function to get the selected blocks by user
    public function getSelectedBlocks($name = null)
    {
        $user = auth()->user()->id;
        if ($name != null) {
            $blocks = BlockSelected::where("user_id",$user)->where('name','like',$name)->first();
        } else {
            $blocks = BlockSelected::select('name')->where("user_id",$user)->get();
        }

        return jsonResponse("blocks found", 200, $blocks);
    }



    //Function to add plant_id in a specific selected block
    public function doPlant(Request $request){

        $block = BlockSelected::where("user_id",auth()->id())->where('block_id',$request->block_id)->update([
            'plant_id' => $request->plant_id,
            'planted_at' =>now()
        ]);

        return jsonResponse("planted", 200);
    }


}
