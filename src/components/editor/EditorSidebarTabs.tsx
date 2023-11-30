import React, { useCallback, useState } from 'react'
import { useDispatch, useGetter } from "../../store";
import { FaCss3, FaElementor, FaList, FaRegEdit, FaTree } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { LibraryIcon } from "@heroicons/react/solid";

const EditorSidebarTabs = ({ tab, setCurrentTab }: any) => {
    const editor = useGetter('editor', 'data', []);
    const setIconTab = useDispatch('editor', 'setCurrentIconTab');
    const setCurrent = useCallback((curr: string) => {
        setCurrentTab(curr);
        setIconTab(curr);
    }, []);
    return (
        <>
            {editor.current && (
                <div className="flex flex-row w-full py-1 items-center border  gap-5 px-2  border-gray-300">
                    <button className="uppercase cursor-pointer badge badge-primary px-3 py-1 border rounded-xl">Page Settings</button>
                    {/**<div className="p-1 border  cursor-pointer">
                        <SiTailwindcss
                            className={`${editor.iconTab === 'customize' ? 'bg-primary-500 text-white' : ''}`}
                            title="Tailwind Controls"
                            size={18}
                            onClick={() => setCurrent('customize')}
                        /></div>
                    <div className="p-1 border  cursor-pointer">
                        <FaCss3
                            className={`${editor.iconTab === 'css' ? 'bg-primary-500 text-white' : ''}`}
                            title="CSS & Style"
                            size={18}
                            onClick={() => setCurrent('css')}
                        />
                    </div>
                    <div className="p-1 border  cursor-pointer">
                        <FaRegEdit
                            className={`${editor.iconTab === 'attributes' ? 'bg-primary-500 text-white' : ''}`}
                            title="Attributes"
                            mode="editor"
                            size={18}
                            onClick={() => setCurrent('attributes')}
                        /></div>
                    <div className="p-1 border  cursor-pointer">
                        <FaTemperatureArrowDown
                            className={`${editor.iconTab === 'snippets' ? 'bg-primary-500 text-white' : ''}`}
                            title="Snippets"
                            size={18}
                            onClick={() => setCurrent('snippets')}
                        />
            </div>**/}
                </div>
            )}
        </>
    )
}
export default EditorSidebarTabs;
