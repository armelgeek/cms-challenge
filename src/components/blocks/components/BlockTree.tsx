import React from 'react'
import { useDispatch } from '../../../store';
const BlockTree = (props: any) => {
    const setCurrent = useDispatch("editor", 'setCurrent');
    const current = props.current ? props.current : props.editor ? props.editor : null
    return current ? (

        <div className="flex flex-col cursor-pointer w-full" onClick={() => setCurrent(current)}>
            <div className="flex flex-row w-full pb-1 items-center capitalize">
                {current.semantic || current.element}
            </div>
            {current.blocks.map((block: any) => (
                <div
                    className="pl-2 flex w-full flex-row items-center pb-1 capitalize"
                    onClick={() => setCurrent(current)}
                    key={'tree_' + block.id}
                >
                    {!block.blocks && (
                        <span>
                            {block.semantic || block.element}
                        </span>
                        
                    )}
                    {block.blocks && (
                        <BlockTree current={block}/>
                    )}

                </div>
            ))}
        </div>
    ) : null
}

export default BlockTree;