import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className='mt-8 mx-28'>
            <Link to={"/"} className="flex flex-row items-center text-primary-500"><FaArrowCircleLeft className='mr-2' />Revenir en arriere</Link>
            <h3 className="font-extrabold text-xl py-2 text-gray-950">Projects</h3>
            <div className="mb-3">
                <div className="flex items-center justify-between">
                    <input type="text" className="rounded-md  border-gray-200 focus:outline-0 focus:shadow-none focus:focus-within:ring-0 text-sm" placeholder='Search project ...' />
                    <Link to={"/project/add"} className="px-4 py-2 text-sm ml-2 rounded-lg bg-indigo-600 text-white">Create project</Link>
                </div>
                <div className="grid grid-cols-4 mt-3 gap-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12].map((v) => (
                        <div className="flex flex-col shadow-md rounded-sm">
                            <div className=" bg-indigo-100 h-52 max-h-52  flex items-center justify-center rounded-t-xl overflow-hidden">
                                <div className="w-48 max-h-32 bg-green-500">

                                </div>

                            </div>
                            <div className="flex flex-col py-3 px-4 bg-primary-500 backdrop-blur-md backdrop-contrast-75 backdrop-saturate-150 backdrop-brightness-75 rounded-b-xl">
                                <div className="flex items-center justify-between">
                                    <Link to={"/editor"} className="font-medium text-lg cursor-pointer text-white">ImmoAgency</Link><div className="flex items-center"><span className="mr-2"></span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2"><p className="flex items-center justify-between"><span></span><span className="ml-1 text-gray-50 text-sm">Edited 26 minutes ago</span></p></div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default Account;