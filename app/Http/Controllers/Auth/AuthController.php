<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AuthRequest;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller 
{
    public function index()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard.index');
        }

        return Inertia::render('Auth/Login');
    }

    public function store(AuthRequest $request)
    {
        $data = $request->getLoginData();

        $authenticated = Auth::attempt([
            'email' => $data['email'],
            'password' => $data['password']
        ], $data['remember']);

        if (!$authenticated) {
            return redirect()->route('login')->withErrors(['error' => 'Invalid email or password.']);
        }

        return redirect()->route('dashboard.index');
    }

    public function destroy()
    {
        Auth::logout();

        return redirect()->route('login');
    }
}