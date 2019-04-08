<?php

use Faker\Generator as Faker;

$factory->define(App\Channel::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'videos' => rand(),
        'views' => rand(),
        'subscribers' => rand(),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
