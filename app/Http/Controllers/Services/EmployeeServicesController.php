<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeServicesController extends Controller
{
    // * Employee Creation Controller.
    public function create(Request $request) {
        try {
            $insert["name"] = $request["name"];
            $insert["email"] = $request["email"];
            $insert["country"] = $request["country"];
            $insert["rol"] = $request["rol"];

            Employee::insert($insert); // * Sending Data.
            
            $response['message'] = "Saved successfull";
            $response['status'] = true;

        } catch (\Exception $error) {
            $response['message'] = $error->getMessage();
            $response['status'] = false;
        }

        return $response;
    }
}
