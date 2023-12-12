import React from 'react'
import BlockTailwind from "../../components/blocks/tailwind/BlockTailwind";
import { useGetter } from "../../store";
const EditorSidebar = ({ tab, close }: any) => {
    const editor = useGetter('editor', 'data', []);
    return (
        <>
            <div className="flex flex-col px-3 ">
                <label htmlFor="editor" className='text-xs'>State</label>
                <select className='select select-sm bg-white'>
                    <option value="Neutral">Neutral</option>
                    <option value="active">Active</option>
                    <option value="hover">Hover</option>
                    <option value="focus">Focus</option>
                </select>
            </div>
            {/**  <BlockCss/>*/}
            <div className=" py-1 border-b border-gray-200 dark:border-gray-700 px-3  flex flex-row justify-between items-center capitalize cursor-pointer  text-gray-700 text-base"></div>
            <BlockTailwind
                css={editor.current.css.css}
                cid={editor.current.id}
                key={editor.current.id}
            />
            {/**{tab == 'css' && <BlockCss />}
                {tab == 'attributes' && <BlockAttributes />}
    {tab == 'snippets' && <BlockLibrary />}**/}
        </>
    )
}
export default EditorSidebar;
