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
                <div className="flex flex-col relative justify-around">
                    <div className="flex flex-col  h-screen bg-white dark:bg-gray-800 relative">
                        <div className="flex w-full border-b border-gray-200 dark:border-gray-600">
                            <button className='flex items-center justify-center py-3 focus:outline-none text-xs leading-tight font-medium border-b -mb-px select-none text-gray-900 dark:text-white border-gray-300 dark:border-gray-400 flex-1'>Design</button>
                            <button className='flex items-center justify-center py-3 focus:outline-none text-xs leading-tight font-medium -mb-px select-none text-gray-900 dark:text-white border-gray-300 dark:border-gray-400 flex-1'>Setting</button>
                            <button className='flex items-center justify-center py-3 focus:outline-none text-xs leading-tight font-medium -mb-px select-none text-gray-900 dark:text-white border-gray-300 dark:border-gray-400 flex-1'>Animations</button>
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
