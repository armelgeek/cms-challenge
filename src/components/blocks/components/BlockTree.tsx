import { useCallback } from 'react'
import { useDispatch, useGetter } from '../../../store';
import _ from 'lodash';
import { FaCopy, FaTimesCircle } from 'react-icons/fa';
function getCoords(id: any) {
    let el = document.querySelector("#preview-frame")?.contentWindow.document.querySelector('#' + id) as any;
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
    const toggleSelectedBlock = useDispatch('editor', 'toggleSelectedBlock');
    const resetSelectedBlock = useDispatch('editor', 'resetSelectedBlock');
    const current = props.current ? props.current : props.editor ? props.editor : null
    const deleteElement = useCallback(() => {
        deleteBlock();
        if (editor.selectedBlocks.length > 0) {
            for (let index = 0; index < editor.selectedBlocks.length; index++) {
                const element = editor.selectedBlocks[index];
                deleteBlock(element)
            }
            resetSelectedBlock();
        }
    }, [editor])
    const duplicateElement = useCallback(() => {
        duplicateBlock();
        if (editor.selectedBlocks.length > 0) {
          for (let index = 0; index < editor.selectedBlocks.length; index++) {
              const element = editor.selectedBlocks[index];
              duplicateBlock(element)
          }
          resetSelectedBlock();
      }
      },[editor])
    const getBorderStyle = (curr: any) => {
        const isSelected = editor.selectedBlocks && editor.selectedBlocks.some((block:any) => block.id === curr.id);
      
        if (editor.current && editor.current.id === curr.id) {
          return isSelected ? ' bg-red-500 text-white' : 'border bg-primary-600 text-white';
        } else {
          return isSelected ? ' bg-red-500 text-white' : 'bg-transparent text-black';
        }
      };
      
    return (editor.current != null && current.id != null) ? (
        <div className={`flex flex-col items-stretch  cursor-pointer  ${current.tag != 'document' ? 'pl-2' : ''} text-xs text-white bg-y-blue-500`} onClick={(e) => {
            e.stopPropagation();
            let coords = getCoords(current.id)
            props.setCurrent(current, coords.width);
            if (e.ctrlKey) {
                toggleSelectedBlock(current);
            } else {
                resetSelectedBlock();
            }
        }}>
            <div className={`flex p-2 border-l border-b rounded-md border-gray-200 ${getBorderStyle(current)}`}>
                <div className="flex flex-row justify-between items-center w-full truncate">
                    <div className="text">
                        <span className='icons mr-em-2'></span>
                        <span className='text-xs truncate w-full'> {current.tag == "document" ? "Body" : current.title}</span>

                    </div>
                    <div className="flex flex-row gap-1">

                        {editor.current.tag != 'document' ? (
                            <>
                                <div className="text-white  hover:text-purple-300 text-sm" onClick={duplicateElement}>
                                    <FaCopy size={12} />
                                </div>
                                <FaTimesCircle onClick={deleteElement} className={`${editor.current.id === current.id ? 'text-white' : 'text-gray-400'}`} />
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
                        if (e.ctrlKey) {
                            toggleSelectedBlock(block);
                        } else {
                            resetSelectedBlock();
                        }
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