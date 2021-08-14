import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    function responsive() {
        let navigation = document.getElementById("navigation");

        if (!navigation.classList.contains("show-menu")) {
            navigation.classList.add("show-menu");
            navigation.classList.remove("hide-menu");
        } else {
            navigation.classList.add("hide-menu");
            navigation.classList.remove("show-menu");
        }
    }

    return (
        <nav className="flex fixed w-screen items-center justify-between flex-wrap bg-gradient-to-t from-blue-400 via-blue-500 to-blue-700 px-6 py-4 z-50">
            <Link
                to="/"
                className="flex items-center flex-shrink-0 text-white mr-6"
            >
                <svg
                    className="fill-current h-8 w-8 mr-2"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <span className="font-pop font-semibold text-3xl tracking-wider">
                    RTL
                </span>
            </Link>
            <div className="block lg:hidden" onClick={() => responsive()}>
                <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className="w-full flex-grow hidden lg:flex lg:items-center lg:w-auto z-50"
                id="navigation"
            >
                <div className="flex flex-col lg:flex-row lg:justify-end text-xl font-pop font-medium tracking-wide lg:flex-grow ">
                    <Link
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-10"
                    >
                        Home
                    </Link>
                    <Link
                        to="/employee/create"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-10"
                    >
                        Add Employee
                    </Link>
                    <Link
                        to="/employee/list"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white lg:mx-10"
                    >
                        List Of Employees
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
