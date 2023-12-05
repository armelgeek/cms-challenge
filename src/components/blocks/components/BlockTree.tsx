import React from 'react'
import { useDispatch, useGetter } from '../../../store';
import _ from 'lodash';
import { FaAngleRight, FaArrowDown } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
function getCoords(id: any) {
     let el = document.querySelector("#preview-frame").contentWindow.document.querySelector('#' + id)as any;
     if(!el) return null;
    try {
      return el.getBoundingClientRect()
    } catch (err) {
      return null
    }
  }
const BlockTree = (props: any) => {
    const setInfo = useDispatch("editor", 'setInfo');
    const editor = useGetter('editor', 'data', []);
    const current = props.current ? props.current : props.editor ? props.editor : null
    return (editor.current!= null && current.id != null) ? (

        <div className={`flex flex-row justify-start items-center cursor-pointer`} onClick={(e) =>{
            e.stopPropagation();
            let coords = getCoords(current.id)
            props.setCurrent(current,coords.width);
        }}>
            <div className={`${editor.current.id === current.id ? 'bg-primary-600 text-white':'bg-slate-300'} rounded-full border flex flex-row px-2 justify-between items-center capitalize`}>
                <div className="tag-element text-sm"> {current.semantic || current.element}</div>
            </div>
            <div className="icon-element mx-1"><FaAngleRight className='text-slate-400'/></div>


            {current.blocks.map((block: any) => (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        setInfo({
                            prop: 'current',
                            value: current
                        })
                    }}
                    key={'tree_' + block.id}
                >
                    
                    {block.blocks && (
                        <BlockTree current={block} setCurrent={props.setCurrent}/>
                    )}

                </div>
            ))}
        </div>
    ) : null
}

export default BlockTree;