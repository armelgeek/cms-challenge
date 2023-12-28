import React, { useCallback } from 'react'
import BlockTailwind from "../../components/blocks/tailwind/BlockTailwind";
import { useDispatch, useGetter } from "../../store";
const EditorSidebar = ({ tab, close }: any) => {
    const editor = useGetter('editor', 'data', []);
    const desktop = useGetter('desktop', 'data', []);
    const setInfo = useDispatch('desktop', 'setInfo');
 
    return (
        <>
            <div className="flex flex-col px-3  py-1">
                <label htmlFor="editor" className='text-xs uppercase'>Pseudo-/classes/elements</label>
                <select value={desktop.state} onChange={(e) => {
                    setInfo({
                        prop: 'state',
                        value: e.target.value
                    })
                }} className='select select-sm bg-white'>
                    <option value="neutral" >Default</option>
                    <option value="hover">Hover</option>
                    <option value="focus">Focus</option>
                    <option value="focus-visible">Focus Visible</option>
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                    <option value="group-hover">Group Hover</option>
                    <option value="first">First</option>
                    <option value="last">Last</option>
                    <option value="before">Before</option>
                    <option value="after">After</option>
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
