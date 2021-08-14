import React from "react";

const Create = () => {
    return (
        <div className="container mx-auto">
            <div className="content-alignment w-11/12 lg:w-2/5 lg:mt-0">
                <h2 className="text-center text-blue-700 font-pop font-semibold mb-4 text-3xl lg:text-4xl">
                    Add Employee
                </h2>

                <form className="relative w-full">
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase font-pop tracking-wide text-blue-700 text-base font-medium mb-2"
                                htmlFor="name"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="appearance-none block w-full font-pop bg-gray-200 text-gray-700 border border-gray-200 rounded-lg font-normal py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="name"
                                placeholder="Joe Doe"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase font-pop tracking-wide text-blue-700 text-base font-medium mb-2"
                                htmlFor="country"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                name="country"
                                className="appearance-none block w-full font-pop bg-gray-200 text-gray-700 border border-gray-200 rounded-lg font-normal py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="country"
                                placeholder="Colombia"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase font-pop tracking-wide text-blue-700 text-base font-medium mb-2"
                                htmlFor="rol"
                            >
                                Rol
                            </label>
                            <div className="relative">
                                <select
                                    name="rol"
                                    className="block appearance-none w-full font-pop bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg font-normal leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="rol"
                                >
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="publicist">Publicist</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex float-right">
                        <input
                            type="submit"
                            className="font-pop text-base font-medium px-10 py-2 rounded-lg cursor-pointer text-white bg-gradient-to-t from-blue-400 via-blue-500 to-blue-700"
                            value="Send"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
