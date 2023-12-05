import React from 'react'
import BlockTailwind from "../../components/blocks/tailwind/BlockTailwind";
import { useGetter } from "../../store";
const EditorSidebar = ({ tab, close }: any) => {
    const editor = useGetter('editor', 'data', []);
    return (
        <div className="relative w-full z-highest overflow-hidden">
            
            <div className="w-full h-full max-h-full overflow-y-auto ">
                {/**  <BlockCss/>*/}
                <BlockTailwind
                    css={editor.current.css.css}
                    cid={editor.current.id}
                    key={editor.current.id}
                />
                {/**{tab == 'css' && <BlockCss />}
                {tab == 'attributes' && <BlockAttributes />}
    {tab == 'snippets' && <BlockLibrary />}**/}
            </div>


        </div>
    )
}
export default EditorSidebar;
