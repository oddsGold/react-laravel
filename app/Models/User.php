<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar_img',
        'created_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

//    public static function getUsers($users){
//        $usersArray = array();
//        foreach($users as $key => $user){
//            array_push($usersArray, array(
//                'id' => $user->id,
//                'email'  => $user->email,
//                'avatar_img'  => $user->avatar_img,
//                'created_at'  => $user->created_at,
//            ));
//        }
//
//        return $usersArray;
//
//    }

    public static function usersToArray(){
//        $users = self::getUsers(User::query()->orderByDesc('id')->paginate(1));
        $users = User::query()->orderByDesc('id')->paginate(1);
        return response($users, 200);
    }
}
