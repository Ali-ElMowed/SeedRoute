<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Every user has many blocks (relation)
    public function block(){
        return $this->hasMany(Block::class,'user_id');
    }

    //Every user could be an advisor (relation)
    public function advisor(){
        return $this->hasOne(Advisor::class,'user_id');
    }

    //Every user has many "sent messages"
    public function chatsent(){
        return $this->hasMany(Chat::class,'sender_id');
    }

    //Every user has many "recived messages"
    public function chatrecived(){
        return $this->hasMany(Chat::class,'reciver_id');
    }
}
