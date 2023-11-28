import React from 'react'
import { useDispatch, useGetter } from '../../../store';
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

        <div className={`flex flex-col bg-white cursor-pointer w-full px-3`} onClick={(e) =>{
            e.stopPropagation();
            let coords = getCoords(current.id)
            props.setCurrent(current,coords.width);
        }}>
            <div className={`${editor.current.id === current.id ? 'bg-gray-500 text-white':'bg-white'} flex flex-row w-full px-2 py-1 items-center capitalize`}>
                {current.semantic || current.element} <small className='text-xs badge badge-default mx-2 bg-white text-black px-2'>#{current.id}</small>
            </div>
            {current.blocks.map((block: any) => (
                <div
                    className={`pl-2 flex w-full flex-row items-center capitalize `}
                    onClick={(e) => {
                        e.stopPropagation();
                        setInfo({
                            prop: 'current',
                            value: current
                        })
                    }}
                    key={'tree_' + block.id}
                >
                    {!block.blocks && (
                        <span>
                            {block.semantic || block.element}
                        </span>
                        
                    )}
                    {block.blocks && (
                        <BlockTree current={block} setCurrent={props.setCurrent}/>
                    )}

                </div>
            ))}
        </div>
    ) : null
}

export default BlockTree;