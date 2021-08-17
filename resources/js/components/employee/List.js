import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import EmployeeServices from "../../services/EmployeeServices";

const List = () => {
    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {
        async function fetchEmployeeData() {
            // * Service Request.
            const response = await EmployeeServices.listOfEmployees();

            // * Data Storage In State.
            setListEmployee(response.data);
        }

        fetchEmployeeData();
    }, []);

    const onClickDelete = async (i, id) => {
        let confirming = confirm("Are you sure to delete this item?");

        if (confirming === true) {
            const NEW_LIST = listEmployee;
            NEW_LIST.splice(i, 1);
            setListEmployee(NEW_LIST);

            const response = await EmployeeServices.deleteEmployee(id);

            response.status ? alert(response.message) : alert(response.message);
        }
    };

    return (
        <div className="container mx-auto">
            <div className="content-alignment-list w-11/12 mt-5 lg:mt-10 lg:pb-10">
                <h2 className="text-center text-blue-700 font-pop font-semibold mb-6 mt-5 lg:mt-0 text-3xl lg:text-4xl">
                    List Of Employee
                </h2>
                <table className="border-collapse w-full ">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Rol</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listEmployee.map((item, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="bg-white lg:hover:bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                                >
                                    <td>
                                        <span>Id</span>
                                        {i + 1}
                                    </td>
                                    <td>
                                        <span>Name</span>
                                        {item.name}
                                    </td>
                                    <td>
                                        <span>Email</span>
                                        {item.email}
                                    </td>
                                    <td>
                                        <span>Country</span>
                                        {item.country}
                                    </td>
                                    <td>
                                        <span>Rol</span>
                                        {item.rol}
                                    </td>
                                    <td>
                                        <span>Actions</span>
                                        <Link
                                            to={`/employee/edit/${item.id}`}
                                            className="py-1 px-2 mx-1 text-white rounded-lg no-underline bg-blue-500"
                                        >
                                            Edit
                                        </Link>
                                        <a
                                            href="#"
                                            className="py-1 px-2 mx-1 text-white rounded-lg no-underline bg-red-500"
                                            onClick={() =>
                                                onClickDelete(i, item.id)
                                            }
                                        >
                                            Remove
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
