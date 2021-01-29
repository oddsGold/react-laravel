<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenusController extends Controller
{
    public function index()
    {
        return Menu::allWithUrlToArray();
    }

    public function show(Menu $menu)
    {
        return $menu;
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request, Menu $menu)
    {
        $menu->update($request->all());

        return response()->json($menu, 200);
    }

    public function delete(Menu $menu)
    {
        $menu->delete();

        return response()->json(null, 204);
    }
}
