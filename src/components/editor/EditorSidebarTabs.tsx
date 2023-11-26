import React, {useCallback, useState} from 'react'
import {useDispatch, useGetter} from "../../store";
import {FaCss3, FaElementor, FaList, FaRegEdit, FaTree} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {FaTemperatureArrowDown} from "react-icons/fa6";
import {LibraryIcon} from "@heroicons/react/solid";

const EditorSidebarTabs = ({tab,setCurrentTab}:any) => {
    const editor = useGetter('editor','data',[]);
    const setIconTab = useDispatch('editor','setCurrentIconTab');
    const setCurrent =useCallback((curr:string)=>{
        setCurrentTab(curr);
        setIconTab(curr);
    },[]);
    return (
        <>
            {editor.current && (
                <div className="pl-1 pt-2 flex flex-col gap-6 cursor-pointer text-gray-400">
                    <FaElementor
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='elements'?'bg-purple-600 text-white': ''}`}
                        title="Add element"
                        onClick={() =>setCurrent('elements')}
                    />
                    <SiTailwindcss
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='customize'?'bg-purple-600 text-white': ''}`}
                        title="Tailwind Controls"
                        onClick={() =>setCurrent('customize')}
                    />
                    <FaCss3
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='css'?'bg-purple-600 text-white': ''}`}
                        title="CSS & Style"
                        onClick={() =>setCurrent('css')}
                    />
                    <FaRegEdit
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='attributes'?'bg-purple-600 text-white': ''}`}
                        title="Attributes"
                        mode="editor"
                        onClick={() =>setCurrent('attributes')}
                    />
                    <FaTemperatureArrowDown
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='snippets'?'bg-purple-600 text-white': ''}`}
                        title="Snippets"
                        onClick={() =>setCurrent('snippets')}
                    />
                    <FaList
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='library'?'bg-purple-600 text-white': ''}`}
                        title="Library"
                        onClick={() =>setCurrent('library')}
                    />
                    <FaTree
                        className={`icon-button ml-0 mb-1 ${editor.iconTab==='tree'?'bg-purple-600 text-white': ''}`}
                        title="Element Tree"
                        onClick={() =>setCurrent('tree')}
                    />
                </div>
            )}
        </>
    )
}
export default EditorSidebarTabs;
