<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    public function index()
    {
        return User::usersToArray();
    }

    public function profile($id){
        $user = User::with('userImage')->findOrFail($id);
        return $user;
    }

    public function destroy($id)
    {
        $user = User::find($id)->delete();

        return response()->json('User deleted successful', 204);
    }

}
