import React, {useCallback, useState} from 'react'
import BlockEditor from './components/blocks/BlockEditor';
import EditorSidebarTabs from "./components/editor/EditorSidebarTabs";
import EditorSidebar from "./components/editor/EditorSidebar";
import {useDispatch, useGetter} from "./store";
import DesktopSidebarLeft from './components/blocks/DesktopSidebarLeft';
import EditorFooter from './Footer';

const Editor = () => {
    return (
        <div className="overflow-hidden max-h-screen h-screen">
            <div className="editor-container min-h-screen top-0 right-0 left-0 bottom-0 flex flex-row">
                <div className="w-full overflow-y-hidden overflow-x-hidden">
                    <div className="w-full grid grid-cols-12 relative">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12 min-h-screen">
                               
                                <div className="flex flex-col inset-0 mb-10 laptop-view">
                                    {/**<DesktopSidebarLeft/>**/}
                                    <BlockEditor/>

                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editor;