import React, { useEffect } from 'react'
import { useDispatch, useGetter } from '../../store';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatRelativeDate } from '../../utils';

const Projects = () => {
    const projects = useGetter('projects', 'data', []);
    const fetch = useDispatch("projects", "fetchProject");
    useEffect(() => {
        fetch();
    }, [])
    console.log('ici leka', projects);
    return (
        <div className='mx-28 mt-7'>
            <Link to={"/"} className="flex flex-row items-center text-primary-500"><FaArrowCircleLeft className='mr-2' />Revenir en arriere</Link>
            <h3 className="font-extrabold text-xl py-2 text-gray-950">Projects</h3>
            <div className="mb-3">
                <div className="flex items-center justify-between">
                    <input type="text" className="rounded-md  border-gray-200 focus:outline-0 focus:shadow-none focus:focus-within:ring-0 text-sm" placeholder='Search project ...' />
                    <Link to={"/project/add"} className="px-4 py-2 text-sm ml-2 rounded-lg bg-indigo-600 text-white">Create project</Link>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-3 gap-5">
                {projects.map((project: any,index:number) => (
                    <div className="flex flex-col shadow-md rounded-sm" key={index}>
                        <div className=" bg-indigo-100 h-52 max-h-52  flex items-center justify-center rounded-t-xl overflow-hidden">
                            <div className="w-48 max-h-32 bg-green-500">

                            </div>

                        </div>
                        <div className="flex flex-col py-3 px-4 bg-primary-500 backdrop-blur-md backdrop-contrast-75 backdrop-saturate-150 backdrop-brightness-75 rounded-b-xl">
                            <div className="flex items-center justify-between">
                                <Link to={`/editor/${project.id}`} className="font-medium text-lg cursor-pointer text-white">{project.name}</Link><div className="flex items-center"><span className="mr-2"></span>
                                </div>

                            </div>
                            <div className="flex items-center justify-between mt-2"><p className="flex items-center justify-between"><span></span><span className="ml-1 text-gray-50 text-sm">{formatRelativeDate(project.created_at)}</span></p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects;