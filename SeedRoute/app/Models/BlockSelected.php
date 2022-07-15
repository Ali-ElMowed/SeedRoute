<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlockSelected extends Model
{
    use HasFactory;

    private $table = 'blocks_selected';

    public function calendar()
    {
        return $this->hasMany(Calender::class, 'selected_block_id');
    }
}
