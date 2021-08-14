import React from "react";
import { Link } from "react-router-dom";

const List = () => {
    return (
        <div className="container mx-auto">
            <div className="content-alignment-list w-11/12 mt-5 lg:mt-0">
                <h2 className="text-center text-blue-700 font-pop font-semibold mb-6 mt-5 lg:mt-0 text-3xl lg:text-4xl">
                    List Of Employee
                </h2>
                <table className="border-collapse w-full ">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Rol</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white lg:hover:bg-gray-200 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td>
                                <span>Id</span>1
                            </td>
                            <td>
                                <span>Name</span>
                                Joe Doe
                            </td>
                            <td>
                                <span>Country</span>
                                Colombia
                            </td>
                            <td>
                                <span>Rol</span>
                                Developer
                            </td>
                            <td>
                                <span>Actions</span>
                                <Link
                                    to="/employee/edit"
                                    className="py-1 px-2 mx-1 text-white rounded-lg no-underline bg-blue-500"
                                >
                                    Edit
                                </Link>
                                <a
                                    href="#"
                                    className="py-1 px-2 mx-1 text-white rounded-lg no-underline bg-red-500"
                                >
                                    Remove
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;
