<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\Services\EmployeeServicesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// * Views Routes.
Route::get('/', [EmployeeController::class, "index"]);
Route::get("/employee/list", [EmployeeController::class, "index"]);
Route::get("/employee/create", [EmployeeController::class, "index"]);
Route::get("/employee/edit", [EmployeeController::class, "index"]);

// * Services Routes.
Route::post('/create', [EmployeeServicesController::class, "create"]);

