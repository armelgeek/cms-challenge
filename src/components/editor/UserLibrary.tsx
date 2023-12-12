import React, { useCallback, useState } from 'react'
import _ from 'lodash';
import { useDispatch, useGetter } from '../../store';
import Template from '../../utils/tail/templates';
import ComponentsGallery from './gallery/ComponentsGallery';
import { useHistory } from 'react-router-dom';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { addKitBlockInPage, editKitBlockInPage } from "../../store/modules/editor/action";
import Modal from '../blocks/Modal';
import sdk from "../../utils/api-sdk";
const UserLibrary = () => {
    const desktop = useGetter('desktop', 'data', []);
    const setInfos = useDispatch('desktop', 'setInfos');
    const createEmptyBlock = useDispatch('editor', 'createEmptyBlock');
    const addKitBlockInPage = useDispatch('editor', 'addKitBlockInPage');
    const editKitBlockInPage = useDispatch('editor', 'editKitBlockInPage');
    const [gr, setGr] = useState('');
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [state, setState] = useState({
        library: {
            name: 'New component',
            author: 'Armel Wanes',
            description: '',
            templates: []
        },
        message: ''
    });
    const [kits, setKits] = useState({
        limit: 0,
        skip: 0,
        pages: null,
        total: 0,
        galleryID: null,
        freeKits: true
    });
    const updateStateAttributes = useCallback((updates: any) => {
        setState((prevState: any) => ({
            ...prevState,
            ...Object.keys(updates).reduce((acc: any, key) => {
                if (updates[key] && typeof updates[key] === 'object') {
                    acc[key] = {
                        ...prevState[key],
                        ...updates[key],
                    };
                } else {
                    acc[key] = updates[key];
                }
                return acc;
            }, {}),
        }));
    }, [state]);

    const createUserLibrary = useCallback(() => {
        let founded = false
        desktop.uikits.forEach((uikit: any, i: number) => {
            if (uikit.name === state.library.name) {
                founded = true
                return
            }
        })
        if (!founded) {
            desktop.uikits.push(state.library)
        }
        let requestObj = sdk.createUserLibrary(state.library).promise;
        requestObj
            .then((response: any) => {
                setInfos({
                    'uikits': desktop.uikits,
                    'library': {
                        name: state.library.name,
                        author: 'Armel Wanes',
                        description: state.library.description,
                        templates: []
                    }
                })
            })


    }, [state, desktop])
    return (
        <>
            <Modal
                title="Ajouter une nouvelle element"
                show={show}
                canSubmit={!!state.library.name}
                setShow={setShow}
                onSubmit={createUserLibrary}
            >
                <label>Nom du composant</label>
                <input className='input-control' onChange={(e: any) => {
                    updateStateAttributes({
                        library: {
                            name: e.target.value
                        }
                    })
                }} placeholder='Nom du composant' value={state.library.name} />
                <label>Description</label>
                <textarea className='input bg-slate-100' onChange={(e: any) => {
                    updateStateAttributes({
                        library: {
                            description: e.target.value
                        }
                    })
                }} >{state.library.description}</textarea>
            </Modal>
            <div className="m-2">
                <button className="btn rounded-sm border bg-white  btn-sm w-full" onClick={() => setShow(!show)}>Click to add custom template</button>
            </div>

            <div className=" bg-white overflow-hidden mt-0 inset-0">
                <div className="py-1">
                    <div className="flex flex-row items-center gap-2">
                    </div>
                    {!_.isUndefined(desktop.uikits) && desktop.uikits.map((kit: any) => (
                        <>
                            <div className={`py-3.5 capitalize flex items-center cursor-pointer hover:bg-gray-950 hover:text-white p-2  text-base ${gr === kit.name ? 'bg-slate-950 text-white' : 'text-gray-950'}`} onClick={() => {
                                //loadUIKit(kit);
                                setGr(gr === kit.name ? null : kit.name)
                            }}>
                                {kit.name}
                                <div className="absolute right-0 m-1">
                                    {gr === kit.name ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                                </div>
                            </div>
                            <div key={kit.name} className="flex w-full h-96 max-h-96 overflow-y-auto overflow-x-hidden bg-slate-200 flex-row flex-wrap justify-center cursor-pointer" style={{
                                display: gr === kit.name ? 'flex' : 'none'
                            }}>

                                {!_.isNull(kit.json) && !_.isUndefined(kit.json) && !_.isUndefined(kit.json.templates) &&(
                                    <ComponentsGallery
                                        kit={kit}
                                        page
                                        skip={kits.skip}
                                        limit={kits.limit}
                                        addKitBlockInPage={addKitBlockInPage}
                                        editKitBlockInPage={editKitBlockInPage}
                                    />
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </>
    )
}
export default UserLibrary;