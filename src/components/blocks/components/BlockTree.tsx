import React from 'react'
import { useDispatch, useGetter } from '../../../store';
import _ from 'lodash';
import { FaArrowDown } from 'react-icons/fa';
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
    console.log('blockTree',current.blocks);
    return (editor.current!= null && current.id != null) ? (

        <div className={`flex flex-col bg-white cursor-pointer w-full`} onClick={(e) =>{
            e.stopPropagation();
            let coords = getCoords(current.id)
            props.setCurrent(current,coords.width);
        }}>
            <div className={`${editor.current.id === current.id ? 'bg-primary-600 text-white':'bg-slate-300'} border flex flex-row w-full px-2 py-1 justify-between items-center capitalize`}>
                <div className="tag-element"> {current.semantic || current.element}</div>
                {(current.type =='container' && current.blocks.length > 0) && (<div className="icon-element"><FaAngleDown/></div>)}
            </div>

            {current.blocks.map((block: any) => (
                <div
                    className={`pl-2 flex w-full flex-row items-center`}
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