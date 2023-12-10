import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import BlockEditor from './components/blocks/BlockEditor';
import { useDispatch, useGetter } from "./store";
import Modal from "./components/blocks/Modal";
import Template from "./utils/tail/templates";
import BlockHeading from "./components/blocks/components/BlockHeading";
import BlockImageUrl from "./components/blocks/components/BlockImageUrl";
import BlockChooseImage from "./components/blocks/components/BlockChooseImage";
import BlockEditContent from "./components/blocks/components/BlockEditContent";
import BlockInput from "./components/blocks/components/BlockInput";
import Element from './utils/tail/element';
import BlockSourceCode from './components/blocks/components/BlockSourceCode';
import { useParams } from 'react-router-dom';
import AddToUIKit from './components/blocks/AddToUIKit';

const Editor = memo(() => {
    const { id } = useParams();
    const ref = useRef(null);
    const setInfo = useDispatch('desktop', 'setInfo');
    const setInfos = useDispatch('desktop', 'setInfos');
    const project = useGetter('projects', 'selected', []);
    const getProject = useDispatch('projects', 'getProject');
    const addToUKit = useDispatch('desktop', 'addToUKit');
    const desktop = useGetter('desktop', 'data', []);
    const tabs = useGetter('desktop', 'tabs', []);
    const fetchUIKit = useDispatch('desktop', 'fetchUIKit');
    const savePage = useDispatch('editor', 'savePage');
    const createEmptyBlock = useDispatch('editor', 'createEmptyBlock');
    const groups = new Element().Groups()
    const dispatch = useDispatch('editor', 'setInfo');
    const uiks = [...desktop.uikits];
    console.log('uikits',uiks);
    const setShow = useCallback((value: any, title: string, type: string) => {
        if (type != null) {
            setInfos({
                'modal.show': value
            })
        } else {
            setInfos({
                'modal.show': value,
                'modal.type': type
            })
        }
        if (title != null) {
            setInfos({
                'modal.title': title
            })
        }

    }, [])
    const onAction = useCallback(() => {
        if (desktop.modal.type == 'add-to-kit') {
            console.log('desktop.library.name',desktop.library);
            if (desktop.library.name != '') {
                addToUKit();
            }
        }
        /**else if(desktop.modal.type == 'heading'){

       }else{

       }**/
    }, [desktop.modal.type, ref])
    useEffect(() => {
        getProject(id);
    }, [id])
    useEffect(()=>{
        fetchUIKit();
    },[])
    const createPage = useCallback(() => {
        createEmptyBlock();
        dispatch({
            prop: 'elements',
            value: groups
        })
    }, []);
    
    return (
        <div className="overflow-hidden max-h-screen h-screen">

            <div className="editor-container min-h-screen top-0 right-0 left-0 bottom-0 flex flex-row">
                <div className="w-full overflow-y-hidden overflow-x-hidden">
                    <div className="w-full grid grid-cols-12 relative">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12 min-h-screen">
                            <div className="flex flex-col inset-0">
                                <div className="px-2 py-2 flex flex-row justify-between">
                                    <p contentEditable={true}>{project.name}</p>
                                    <button className="btn btn-primary btn-xs w-48 py-2 rounded-md " onClick={() => savePage(id)}>Save Page</button>
                                </div>
                                <div>
                                    {tabs.length > 0 ? (
                                        <BlockEditor ref={ref} id={id} />
                                    ) : (
                                        <button className="btn btn-primary btn-xs w-48 py-2 rounded-md " onClick={createPage}>Créer un page</button>
                                    )}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Modal
                title={desktop.modal.title}
                show={desktop.modal.show}
                setShow={setShow}
                onSubmit={onAction}
            >
                {desktop.modal.type == 'add-to-kit' && (
                    <AddToUIKit uiks={uiks} setInfos={setInfos}/>
                )}
                {desktop.modal.type == 'heading' && (
                    <BlockHeading />
                )}
                {desktop.modal.type == 'img' && (
                    <BlockChooseImage />
                )}
                {(desktop.modal.type == 'li' || desktop.modal.type == 'youtube' || desktop.modal.type == 'video' || desktop.modal.type == 'h' || desktop.modal.type == 'p') && (
                    <BlockEditContent />
                )}
                {(desktop.modal.type == 'input') && (
                    <BlockInput />
                )}
                {desktop.modal.type == 'sourcecode' && (
                    <BlockSourceCode />
                )}
            </Modal>

        </div>
    )
});
export default Editor;