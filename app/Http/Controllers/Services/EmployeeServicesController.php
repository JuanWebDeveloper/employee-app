<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeServicesController extends Controller
{
    //* Controller To Create Employees.
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

    // * Controller To List Employees.
    public function list() {
        try {
            $data = Employee::all(); // * Recovery Of Created Data.

            $response['data'] = $data;
            $response['message'] = "Load successfull";
            $response['status'] = true;

        } catch (\Exception $error) {
            $response['message'] = $error->getMessage();
            $response['status'] = false;
        }

        return $response;
    }

    // * Controller To Edit Employees.
    public function edit($id) {
        try {
            $data = Employee::find($id); // * Retrieving Employee Data For Editing.

            if ($data) {
                $response['data']  = $data;
                $response['message'] = "Load succesful";
                $response['status'] = true;
             } else {
                $response['data']  = null;
                $response['message'] = "Not found data id = $id";
                $response['status'] = false;
             }

        } catch (\Exception $error) {
            $response['message'] = $error->getMessage();
            $response['status'] = false;
        }

        return $response;
    }

    // * Controller For Employee Update.
    public function update(Request $request, $id) {
        try {
            $data["name"] = $request["name"];
            $data["email"] = $request["email"];
            $data["country"] = $request["country"];
            $data["rol"] = $request["rol"];

            $update = Employee::find($id)->update($data); // * Employee Data Update.

            $response['response'] = $update;
            $response['message'] = "Update successfull";
            $response['status'] = true;

        } catch (\Exception $error) {
            $response['message'] = $error->getMessage();
            $response['status'] = false;
        }

        return $response;
    }

    // * Controller To Delete Employees.
    public function delete($id) {
        try {
            $delete = Employee::find($id)->delete(); // * Employee Data Delete.

            $response['response'] = $delete;
            $response['message'] = "Deleted succesful";
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['status'] = false;
        }

        return $response;
    }
}
