import React, { useCallback } from 'react'
import BlockTailwind from "../../components/blocks/tailwind/BlockTailwind";
import { useDispatch, useGetter } from "../../store";
const EditorSidebar = ({ tab, close }: any) => {
    const editor = useGetter('editor', 'data', []);
    const desktop = useGetter('desktop', 'data', []);
    const setInfo = useDispatch('desktop', 'setInfo');
    const setMode = useCallback((mode: any) => {
        setInfo({
            prop: 'mode',
            value: mode
        })

    }, [])
    return (
        <>
            <div className="flex flex-col items-center justify-center px-3 ">
                <div className='flex flex-row flex-wrap px-1 py-2 gap-2 items-center border-gray-300'>
                    <div onClick={() => setMode('base')} className={`cursor-pointer badge badge-${desktop.mode == 'base' ? 'primary' : 'default'} p-1 border `}>ALL</div>
                    <div onClick={() => setMode('sm')} className={`cursor-pointer badge badge-${desktop.mode == 'sm' ? 'primary' : 'default'} p-1 border `}>SM</div>
                    <div onClick={() => setMode('md')} className={`cursor-pointer badge badge-${desktop.mode == 'md' ? 'primary' : 'default'} p-1 border `}>MD</div>
                    <div onClick={() => setMode('lg')} className={`cursor-pointer badge badge-${desktop.mode == 'lg' ? 'primary' : 'default'} p-1 border `}>LG</div>
                    <div onClick={() => setMode('xl')} className={`cursor-pointer badge badge-${desktop.mode == 'xl' ? 'primary' : 'default'} p-1 border `}>XL</div>
                    <div onClick={() => setMode('xxl')} className={`badge badge-${desktop.mode == 'xxl' ? 'primary' : 'default'} p-1 border `}>2XL</div>
                </div>
            </div>
            <div className="flex flex-col px-3 ">
                <label htmlFor="editor" className='text-xs'>State</label>
                <select value={desktop.state} onChange={(e) => {
                    setInfo({
                        prop: 'state',
                        value: e.target.value
                    })
                }} className='select select-sm bg-white'>
                    <option value="neutral" >Neutral</option>
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
