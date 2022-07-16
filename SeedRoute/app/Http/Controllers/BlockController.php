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
                        'user_id' => auth()->id(),
                        'name' => $block['name'],
                        'block_id' => $block['name'],
                    ];
                }
            }
            BlockSelected::insert($data);

            return jsonResponse('success', 201);
        } catch (Exception $e) {
            return jsonResponse('error', 500, [$e->getMessage()]);
        }
    }
}
