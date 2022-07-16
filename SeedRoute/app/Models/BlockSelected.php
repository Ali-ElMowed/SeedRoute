<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlockSelected extends Model
{
    use HasFactory;

    public $table = 'blocks_selected';

    public $guarded =[];

    public function calendar()
    {
        return $this->hasMany(Calender::class, 'selected_block_id');
    }
}
