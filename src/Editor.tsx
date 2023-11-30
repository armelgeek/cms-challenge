import React, {useCallback, useEffect, useState} from 'react'
import BlockEditor from './components/blocks/BlockEditor';
import {useDispatch, useGetter} from "./store";
import Modal from "./components/blocks/Modal";
import Template from "./utils/tail/templates";
import BlockHeading from "./components/blocks/components/BlockHeading";
import BlockImageUrl from "./components/blocks/components/BlockImageUrl";
import BlockChooseImage from "./components/blocks/components/BlockChooseImage";
import BlockEditContent from "./components/blocks/components/BlockEditContent";
import BlockInput from "./components/blocks/components/BlockInput";
import Element from './utils/tail/element';

const Editor = () => {

    const setInfo = useDispatch('desktop', 'setInfo');
    const setInfos = useDispatch('desktop', 'setInfos');
    const addToUKit = useDispatch('desktop', 'addToUKit');
    const desktop = useGetter('desktop', 'data', []);
    const createEmptyBlock = useDispatch('editor','createEmptyBlock');
    const groups = new Element().Groups()
    const dispatch = useDispatch('editor','setInfo');
    const uiks = [...desktop.uikits, ... new Template().kits()];
    const setShow = useCallback((value:any,title:string,type:string)=>{
        if(type!= null){
            setInfos({
                'modal.show':value
            })
        }else{
            setInfos({
                'modal.show':value,
                'modal.type': type
            })
        }
        if(title != null){
            setInfos({
                'modal.title':title
            })
        }

    },[])
    const onAction = useCallback(() =>{
       if(desktop.modal.type == 'add-to-kit'){
           if(desktop.library.name != ''){
               addToUKit(null);
           }
       }
        /**else if(desktop.modal.type == 'heading'){

       }else{

       }**/
    },[desktop.modal.type])
    useEffect(()=>{
        createEmptyBlock();
        dispatch({
            prop:'elements',
            value:groups 
        })
    },[])
    return (
        <div className="overflow-hidden max-h-screen h-screen">
            <div className="editor-container min-h-screen top-0 right-0 left-0 bottom-0 flex flex-row">
                <div className="w-full overflow-y-hidden overflow-x-hidden">
                    <div className="w-full grid grid-cols-12 relative">
                        <div className="col-span-12 md:col-span-12 lg:col-span-12 min-h-screen">
                                <div className="flex flex-col inset-0 mb-10">
                                    <BlockEditor/>
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
                    <>
                        <label>Ajouter dans la section : </label>
                        <select className="select" onChange={(e: any) => {
                            setInfo({
                                prop: 'library',
                                value: {
                                    name: uiks[e.target.value].name,
                                    author: uiks[e.target.value].author,
                                    description: uiks[e.target.value].description,
                                    templates: uiks[e.target.value].json ? uiks[e.target.value].json.templates : uiks[e.target.value].templates,
                                }
                            })
                        }}>
                            <option value=""></option>
                            {uiks.map((uik: any, i: number) => (
                                <option key={i} value={i}>{uik.name}</option>
                            ))}

                        </select>
                    </>
                )}
                {desktop.modal.type == 'heading' && (
                    <BlockHeading/>
                )}
                {desktop.modal.type == 'img' && (
                    <BlockChooseImage/>
                )}
                {( desktop.modal.type == 'li' || desktop.modal.type == 'youtube' || desktop.modal.type == 'video' || desktop.modal.type == 'h' || desktop.modal.type == 'p') && (
                    <BlockEditContent/>
                )}
                {(desktop.modal.type == 'input') && (
                    <BlockInput/>
                )}
            </Modal>

        </div>
    )
}
export default Editor;