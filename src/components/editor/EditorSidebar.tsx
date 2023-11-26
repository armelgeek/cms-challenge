import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import BlockElements from "../../components/blocks/BlockElements";
import BlockTailwind from "../../components/blocks/tailwind/BlockTailwind";
import { useGetter } from "../../store";
import BlockTree from '../blocks/components/BlockTree';
import BlockCss from '../blocks/components/BlockCss';
import BlockLibrary from '../blocks/components/BlockLibrary';
import BlockAttributes from '../blocks/components/BlockAttributes';
import UserLibrary from "../../components/editor/UserLibrary";

const EditorSidebar = ({ tab, close }: any) => {
    const editor = useGetter('editor', 'data', []);
    return (
        <div className="relative w-full bg-white z-highest overflow-hidden">
            <div className="p-1 shadow-lg bg-gray-950 text-white capitalize flex flex-row items-center text-base cursor-pointer" onClick={close}>
                <span>{tab}</span>
            </div>
            <div className="w-full h-full max-h-full overflow-y-auto">
                {tab == 'elements' && <BlockElements />}
                {tab == 'customize' && (
                    <BlockTailwind
                        css={editor.current.css.css}
                        cid={editor.current.id}
                        key={editor.current.id}
                    />
                )}
                {tab == 'css' && <BlockCss />}
                {tab == 'attributes' && <BlockAttributes />}
                {tab == 'snippets' && <BlockLibrary />}
            </div>


        </div>
    )
}
export default EditorSidebar;
