<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class blocksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blocks = [];

        for ($i = 1; $i <= 29; $i++) {
            $blocks[] = ['order' => $i];
        }

        DB::table('blocks')->insert($blocks);
    }
}
