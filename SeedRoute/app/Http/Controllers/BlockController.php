<?php

namespace App\Http\Controllers;

use App\Models\Block;
use App\Models\BlockSelected;
use Exception;
use Illuminate\Http\Request;

class BlockController extends Controller
{

    /*
    Discription : Get All Blocks Api
    @response blocks collection
    */
    public function getBlocks()
    {
        try {
            $blocks =  Block::all();
            return jsonResponse('success', 200, $blocks);
        } catch (Exception $e) {
            return jsonResponse('error', 500, [$e->getMessage()]);
        }
    }

    public function storeBlocks(Request $request)
    {
        // $selected_blocks = [
        // [
        //     'name' => '20',
        //     'value' => '0'
        // ],
        // [
        //     'name' => '29',
        //     'value' => '1'
        // ]
        // ];


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
            return jsonResponse('error', 500, [$e->getMessage()]);
        }
    }

    // public function getSelectedBlocks()
    // {
    //     try {
    //        $selected_blocks = auth()->user()->blocks_selected->blocks;
    //        return jsonResponse('success', 200, $selected_blocks);

    //     } catch (Exception $e) {
    //         return jsonResponse('error', 500, [$e->getMessage()]);
    //     }
    // }

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

    public function doPlant(Request $request, $name){

        $user = auth()->user()->id;
        $block = BlockSelected::where("user_id",$user)->where('name','like',$name)->first();
        echo($block);
        if($block){
            $block->plant_id = $request->plant_id ;
            $block->update();
        }

        return jsonResponse("planted", 200);
    }


}
