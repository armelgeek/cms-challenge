import React, { useCallback, useState } from 'react'
import _ from 'lodash';
import { useDispatch, useGetter } from '../../store';
import Template from '../../utils/tail/templates';
import ComponentsGallery from './gallery/ComponentsGallery';
import { useHistory } from 'react-router-dom';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import {addKitBlockInPage, editKitBlockInPage} from "../../store/modules/editor/action";

const UserLibrary = () => {
    const desktop = useGetter('desktop', 'data', []);
    const setInfos = useDispatch('desktop', 'setInfos');
    const createEmptyBlock = useDispatch('editor', 'createEmptyBlock');
    const addKitBlockInPage = useDispatch('editor', 'addKitBlockInPage');
    const editKitBlockInPage = useDispatch('editor', 'editKitBlockInPage');
    const [gr,setGr] =useState('');
    const history = useHistory();
    const [state, setState] = useState({
        library: {
            name: 'New UI Kit',
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
        freeKits: true,
        whoobeKits: new Template().kits()
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
    const createUserLibrary = useCallback((payload: any) => {
        let founded = false
        desktop.uikits.forEach((uikit: any, i: number) => {
            if (uikit.name === payload.name) {
                founded = true
                return
            }
        })
        if (!founded) {
            desktop.uikits.push(payload)
        }
        setInfos({
            'uikits': desktop.uikits,
            'library': {
                name: 'New UI Kit',
                author: 'Armel Wanes',
                description: '',
                templates: []
            }
        })
    }, [])

    return (
        <>
            <button className="btn rounded border-0 btn-sm" onClick={() => createUserLibrary(state.library)}>Create New</button>
            <div className=" bg-white overflow-hidden mt-0 inset-0">
                <div className="py-1">
                    <div className="flex flex-row items-center gap-2">
                    </div>
                    {desktop.uikits.map((kit: any) => (
                        <>
                            <div className={`capitalize flex items-center cursor-pointer hover:bg-gray-500 hover:text-white p-2 text-gray-700 text-base ${gr === kit.name ? 'bg-bluegray-300 text-gray-200' : ''}`} onClick={() => {
                                //loadUIKit(kit);
                                setGr(gr === kit.name ? null : kit.name)
                            }}>
                                {kit.name}
                                <div className="absolute right-0 m-1">
                                    {gr === kit.name ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                                </div>
                            </div>
                            <div key={kit.name} className="flex  h-96 max-h-96 overflow-y-auto overflow-x-hidden bg-red-400 flex-row flex-wrap justify-center cursor-pointer p-2" style={{
                                display: gr === kit.name ? 'flex' : 'none'
                            }}>
                                {!_.isNull(kit.json) && (
                                    <ComponentsGallery
                                        pages={kit.templates}
                                        skip={kits.skip}
                                        limit={kits.limit}
                                        addKitBlockInPage={addKitBlockInPage}
                                        editKitBlockInPage={editKitBlockInPage}
                                    />
                                )}
                            </div>
                        </>
                    ))}
                    {kits.freeKits && kits.whoobeKits && (
                        <>
                            {kits.whoobeKits.map((kit: any) => (
                                <>
                                    <div className={`capitalize flex items-center cursor-pointer hover:bg-gray-500 hover:text-white p-2 text-gray-700 text-base ${gr === kit.name ? 'bg-bluegray-300 text-gray-200' : ''}`} onClick={() => {
                                        //loadUIKit(kit);
                                        setGr(gr === kit.name ? null : kit.name)
                                    }}>
                                        {kit.name}
                                        <div className="absolute right-0 m-1">
                                            {gr === kit.name ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                                        </div>
                                    </div>
                                    <div key={kit.name} className="flex  h-96 max-h-96 overflow-y-auto overflow-x-hidden bg-red-400 flex-row flex-wrap justify-center cursor-pointer p-2" style={{
                                        display: gr === kit.name ? 'flex' : 'none'
                                    }}>
                                        {!_.isNull(kit.json) && (
                                            <ComponentsGallery
                                                pages={[]}
                                                skip={kits.skip}
                                                limit={kits.limit}
                                                addKitBlockInPage={addKitBlockInPage}
                                                editKitBlockInPage={editKitBlockInPage}
                                            />
                                        )}
                                    </div>
                                </>
                            ))}

                        </>
                    )}
                </div>
            </div>

        </>
    )
}
export default UserLibrary;