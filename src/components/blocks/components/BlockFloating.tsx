import React, { useCallback, useRef, useState } from 'react'
import { useGetter, useDispatch } from "../../../store";
import { FaArrowDown, FaArrowUp, FaCopy, FaPlus, FaTrash } from 'react-icons/fa';
const BlockFloating = ({ close,floatRef, coords }: any) => {
  const [state, setState] = useState({
    currentIcon: '',
    icons: [
      { icon: 'akar-icons:edit', title: 'Edit content', action: 'BlockEditContent', filter: null },
      { icon: 'bx:bx-heading', title: 'Heading', action: 'BlockHeading', filter: 'h' },
      { icon: 'akar-icons:image', title: 'Image', action: 'BlockImageUrl', filter: 'image' },
      { icon: 'akar-icons:link-chain', title: 'Link', action: 'BlockLink', filter: null }
    ],
    position: {},
    offsetX: 145,
    inner: null,
    currentElement: null
  });
  const editor = useGetter('editor', 'data', []);
  const moveBlock = useDispatch('editor', 'moveBlock');
  const duplicateBlock = useDispatch('editor', 'duplicateBlock');
  const navigateToParent = useDispatch('editor', 'navigateToParent');
  const setCurrentTab = useDispatch('editor', 'showSidebar');
  const setFlexRow = useDispatch('editor', 'setFlexRow');
  const setFlexCol = useDispatch('editor', 'setFlexCol');
  const deleteBlock = useDispatch('editor', 'deleteBlock');
  console.log('coords',coords);
  return editor.current ? (
    <div 
      ref={floatRef} 
      className={` z-50 h-8 bg-gray-500 border border-b-0 rounded-tr-md rounded-tl-md border-primary-500 flex items-center gap-3 absolute z-highest justify-center  text-white text-xs px-2 cursor-pointer`}
      style={{
        top: coords.top,
        left: coords.left
      }}
      >
      <small className="chip bg-blue-400 capitalize" onClick={close}>{editor.current.element} {editor.current.tag}</small>
      <div title={'Move up'} className="floating-icon  hover:text-purple-600 text-xs" onClick={() => moveBlock(editor.current.id,'up')}>
        <FaArrowUp/>
      </div>
      <div title={'Move Down'} className="floating-icon  hover:text-purple-600 text-xs" onClick={() => moveBlock(editor.current.id,'down')}>
      <FaArrowDown/>
      </div>
      <div className="floating-icon  hover:text-purple-600 text-sm" onClick={deleteBlock}>
        <FaTrash/>
      </div>
      <div className="floating-icon  hover:text-purple-600 text-sm" onClick={duplicateBlock}>
        <FaCopy/>
      </div>
      <div className="floating-icon  hover:text-purple-600 text-sm" onClick={navigateToParent}>
          Go to parent
      </div>
      {editor.current.type === 'container' && (
        <div className="floating-icon  hover:text-purple-600 text-sm" onClick={() => setCurrentTab('elements')}>
          <FaPlus/>
        </div>
      )}
      

      {/**{state.icons.map((icon, index) => (
        <div key={index} className="floating-icon  hover:text-purple-600 text-sm" onClick={() => {
          // showDialog(icon)
        }}>
          {icon.title}
        </div>
      ))}**/}
      
    </div>
  ) : null;
}
export default BlockFloating;
