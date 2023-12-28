import React, { useState } from 'react'
import { useDispatch, useGetter } from '../../../store';
import _ from 'lodash';
import { FaAngleRight, FaArrowDown, FaCopy, FaTimesCircle } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
import { GrEdit } from 'react-icons/gr';
import { FiEdit2 } from 'react-icons/fi';
function getCoords(id: any) {
    let el = document.querySelector("#preview-frame").contentWindow.document.querySelector('#' + id) as any;
    if (!el) return null;
    try {
        return el.getBoundingClientRect()
    } catch (err) {
        return null
    }
}
const BlockTree = (props: any) => {
    const setInfo = useDispatch("editor", 'setInfo');
    const duplicateBlock = useDispatch('editor', 'duplicateBlock');
    const deleteBlock = useDispatch('editor', 'deleteBlock');
    const editor = useGetter('editor', 'data', []);
    const current = props.current ? props.current : props.editor ? props.editor : null

    return (editor.current != null && current.id != null) ? (
        <div className={`flex flex-col items-stretch  cursor-pointer  ${current.tag != 'document' ? 'pl-2' : ''} text-xs text-white bg-y-blue-500`} onClick={(e) => {
            
            let coords = getCoords(current.id)
            props.setCurrent(current, coords.width);
        }}>
            <div className={`flex p-2 border-l border-b rounded-md border-gray-200 ${editor.current.id === current.id ? ' border bg-primary-600 text-white' : 'text-black'}`}>
                <div className="flex flex-row justify-between items-center w-full truncate">
                    <div className="text">
                        <span className='icons mr-em-2'></span>
                        <span className='text-xs truncate w-full'> {current.tag == "document" ? "Body" : current.title}</span>

                    </div>
                    <div className="flex flex-row gap-1">

                        {editor.current.tag != 'document' ? (
                            <>
                                <div className="text-white  hover:text-purple-300 text-sm" onClick={duplicateBlock}>
                                    <FaCopy size={12} />
                                </div>
                                <FaTimesCircle onClick={deleteBlock} className={`${editor.current.id === current.id ? 'text-white' : 'text-gray-400'}`} />
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
            {current.blocks.map((block: any) => (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        setInfo({
                            prop: 'current',
                            value: current
                        })
                    }}
                    title={block.id}
                    key={'tree_' + block.id}
                >
                    {!_.isUndefined(block.blocks) && (
                        <BlockTree current={block} setCurrent={props.setCurrent} />
                    )}

                </div>
            ))}
        </div>
    ) : null
}

export default BlockTree;