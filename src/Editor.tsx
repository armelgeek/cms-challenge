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
import { PiFlowerLotusFill } from 'react-icons/pi';
import { FaCheckCircle, FaForward, FaPlay, FaRedo, FaUndo, FaSave } from 'react-icons/fa';

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
    console.log('uikits', uiks);
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
            console.log('desktop.library.name', desktop.library);
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
    useEffect(() => {
        fetchUIKit();
    }, [])
    const createPage = useCallback(() => {
        createEmptyBlock();
        dispatch({
            prop: 'elements',
            value: groups
        })
    }, []);

    return (
        <div className="overflow-hidden max-h-screen h-screen">
            <div className="flex items-center flex-row px-2 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 relative z-40 justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <PiFlowerLotusFill size={36} className="text-primary-500" />
                </div>
                <div className="flex flex-row  items-center">
                    <small className='bg-gray-100 px-1'>Projects</small><small className='px-1'>/</small><small contentEditable>{project.name}</small>
                </div>
                <div className="w-64 px-2 h-full flex justify-end items-center gap-2">
                    <div className="grid grid-flow-col gap-x-1 buttons-group-collapsed">
                        <button className='transition duration-100 ease-in-out flex items-center justify-center tracking-wide select-none focus:outline-none focus:shadow-none border border-white border-opacity-0 whitespace-nowrap text-gray-500 dark:text-gray-300 bg-gray-500 dark:bg-white bg-opacity-5 dark:bg-opacity-10 dark:hover:text-white dark:hover:bg-opacity-15 hover:bg-opacity-5 dark:hover:bg-opacity-5 backdrop-filter backdrop-blur-lg text-xs p-1.5 space-x-1 rounded-md leading-3.5 font-medium'>
                            <FaUndo />
                        </button>
                        <button className='opacity-0.5 transition duration-100 ease-in-out flex items-center justify-center tracking-wide select-none focus:outline-none focus:shadow-none border border-white border-opacity-0 whitespace-nowrap text-gray-500 dark:text-gray-300 bg-gray-500 dark:bg-white bg-opacity-5 dark:bg-opacity-10 dark:hover:text-white dark:hover:bg-opacity-15 hover:bg-opacity-5 dark:hover:bg-opacity-5 backdrop-filter backdrop-blur-lg text-xs p-1.5 space-x-1 rounded-md leading-3.5 font-medium'>
                            <FaRedo />
                        </button>
                    </div>
                    <button className='class="transition duration-100 ease-in-out flex items-center justify-center tracking-wide select-none focus:outline-none focus:shadow-none border border-white border-opacity-0 whitespace-nowrap cursor-not-allowed opacity-50 text-gray-500 dark:text-gray-300 bg-gray-500 dark:bg-white bg-opacity-5 dark:bg-opacity-10 dark:hover:text-white dark:hover:bg-opacity-15 hover:bg-opacity-5 dark:hover:bg-opacity-5 backdrop-filter backdrop-blur-lg text-xs p-1.5 space-x-1 rounded-md leading-3.5 font-medium'>
                        <FaSave/>
                    </button>
                    
                    <div className="flex items-center gap-1">
                        <button className="transition duration-100 ease-in-out flex items-center justify-center tracking-wide select-none focus:outline-none focus:shadow-none border border-white border-opacity-0 whitespace-nowrap text-gray-500 dark:text-gray-300 bg-gray-500 dark:bg-white bg-opacity-5 dark:bg-opacity-10 dark:hover:text-white dark:hover:bg-opacity-15 hover:bg-opacity-5 dark:hover:bg-opacity-5 backdrop-filter backdrop-blur-lg text-xs p-1.5 space-x-1 rounded-md leading-3.5 font-medium has-tooltip">
                            <FaPlay/>
                        </button>
                        <button className="btn btn-primary btn-xs  rounded-md " onClick={() => savePage(id)}>Publish</button>
                    </div>
                </div>
                
                
            </div>
            <div>
                {tabs.length > 0 ? (
                    <BlockEditor ref={ref} id={id} />
                ) : (
                    <button className="btn btn-primary btn-xs w-48 py-2 rounded-md " onClick={createPage}>Créer un page</button>
                )}

            </div>
            <Modal
                title={desktop.modal.title}
                show={desktop.modal.show}
                setShow={setShow}
                onSubmit={onAction}
            >
                {desktop.modal.type == 'add-to-kit' && (
                    <AddToUIKit uiks={uiks} setInfos={setInfos} />
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