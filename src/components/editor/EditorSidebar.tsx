import React from 'react'
import {FaArrowDown} from "react-icons/fa";
import BlockElements from "../../components/blocks/BlockElements";
import BlockTailwind from "../../components/blocks/tailwind/BlockTailwind";
import {useGetter} from "../../store";

const EditorSidebar = ({tab,close}:any) => {
    const editor = useGetter('editor','data',[]);
    return (
        <div className="relative w-full bg-white z-highest h-screen overflow-hidden border-r border-white">
            <div className="p-1 shadow-lg bg-gray-600 text-white capitalize flex flex-row items-center text-base cursor-pointer" onClick={close}>
                <span>{ tab }</span>
                <FaArrowDown  className="absolute right-0 text-white text-xl"/>
            </div>
            {editor.current  ? (
                <div className="w-full h-full overflow-y-auto">
                    {tab == 'elements' && <BlockElements/>}
                    {tab == 'customize' && <BlockTailwind css={editor.current.css.css} cid={editor.current.id} key={editor.current.id}/>}
                </div>
            ) : (
                <div className="flex h-full w-full items-center justify-center text-xl">
                     Select a block
                </div>
            )}

        </div>
    )
}
export default EditorSidebar;
