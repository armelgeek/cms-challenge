import React, {useCallback, useState} from 'react'
import BlockEditor from './components/blocks/BlockEditor';
import EditorSidebarTabs from "./components/editor/EditorSidebarTabs";
import EditorSidebar from "./components/editor/EditorSidebar";
import {useDispatch, useGetter} from "./store";

const Editor = () => {
    const editor = useGetter('editor','data',[]);
    const setCurrentTab = useDispatch('editor','showSidebar');
    const closeSidebar = useDispatch('editor','closeSidebar');
    console.log('editor',editor);
    return (
        <div className="overflow-hidden max-h-screen h-screen mt-8 inset-0 editor-main-container">
            <div className="editor-container min-h-screen top-0 right-0 left-0 bottom-0 flex flex-row">
                <div className="w-full overflow-y-hidden overflow-x-hidden">
                    <div className="w-full grid grid-cols-12 relative">
                        <div className="col-span-12 relative md:col-span-12 lg:col-span-12 mr-10 min-h-screen pb-20">
                          
                                <div className="flex flex-col absolute inset-0 mb-10 laptop-view">
                                    <BlockEditor/>
                                </div>
                        </div>
                        {editor.sidebar.show && (
                        <div className="min-h-screen fixed z-50 right-0 top-0 mt-8 bg-white w-1/5 border-l pr-10">
                            <EditorSidebar tab={editor.sidebar.name} close={closeSidebar}/>
                        </div>
                        )}
                        <div className="fixed bg-white z-50 mt-8 w-10 right-0 top-0 h-screen flex flex-col items-center justify-start text-center shadow">
                            <div className="chip bg-black text-white my-1 text-xs px-1 rounded">Tools</div>
                            <EditorSidebarTabs tab={editor.sidebar.name} setCurrentTab={setCurrentTab}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editor;