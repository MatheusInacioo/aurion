<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required|string',
            'remember' => 'nullable',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Email is required.',
            'email.email' => 'Invalid email format.',
            'password.required' => 'Password is required.',
        ];
    }

    public function getLoginData()
    {
        return [
            'email' => $this->input('email'),
            'password' => $this->input('password'),
            'remember' => $this->input('remember') ? true : false,
        ];
    }
}
