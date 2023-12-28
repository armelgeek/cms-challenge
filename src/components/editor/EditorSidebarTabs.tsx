import React, { useCallback, useState } from 'react'
import { useDispatch, useGetter } from "../../store";
import { FaCss3, FaElementor, FaList, FaRegEdit, FaTree } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { LibraryIcon } from "@heroicons/react/solid";

const EditorSidebarTabs = ({ children, setCurrentTab }: any) => {
    const editor = useGetter('editor', 'data', []);
    const setIconTab = useDispatch('editor', 'setCurrentIconTab');
    const setCurrent = useCallback((curr: string) => {
        setCurrentTab(curr);
        setIconTab(curr);
    }, []);
    return (
        <>
            {editor.current && (
                <div className="flex flex-col relative justify-around  mt-3 py-2">
                    <div className="flex flex-col  h-screen bg-white dark:bg-gray-800 relative">
                        <div className="w-full flex rounded-md p-2 backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-50 dark:bg-white dark:bg-opacity-5">
                            <button className='bg-white flex items-center justify-center gap-1 w-full text-xs focus:outline-none focus:shadow-none leading-4 py-1 px-2 rounded min-w-0 text-gray-900 dark:text-white dark:bg-opacity-10 text-opacity-80'>Design</button>
                            <button className=' flex items-center justify-center gap-1 w-full text-xs focus:outline-none focus:shadow-none leading-4 py-1 px-2 rounded min-w-0 text-gray-900 dark:text-white dark:bg-opacity-10 text-opacity-80'>Setting</button>
                            <button className=' flex items-center justify-center gap-1 w-full text-xs focus:outline-none focus:shadow-none leading-4 py-1 px-2 rounded min-w-0 text-gray-900 dark:text-white dark:bg-opacity-10 text-opacity-80'>Animations</button>
                        </div>
                        <div className=" h-full max-h-full overflow-y-auto overflow-x-hidden noscrollbar flex-1 pt-0">
                        <div className="relative z-10">
                            {children}
                        </div>
                    </div>
                    </div>
                    
                    
                </div>
            )}
        </>
    )
}
export default EditorSidebarTabs;
