<?php

namespace Database\Seeders;

use App\Enums\ActivationStatusEnum;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            User::create([
                'name' => fake()->name(),
                'email' => "user{$i}@email.com",
                'email_verified_at' => now(),
                'password' => bcrypt(123)
            ]);
        }
    }
}
