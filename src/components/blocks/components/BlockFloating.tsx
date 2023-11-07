import React, { useCallback, useRef, useState } from 'react'
import { useGetter, useDispatch } from "../../../store";
const BlockFloating = ({ close, component }: any) => {
  const [state, setState] = useState({
    currentIcon: '',
    icons: [
      { icon: 'fluent:text-color-24-regular', title: 'Text Color', action: 'BlockTextColor', options: { context: 'textcolor' }, filter: null },
      { icon: 'fluent:color-fill-24-regular', title: 'Fill Color', action: 'BlockTextColor', options: { context: 'bgcolor' }, filter: null },
    ],
    position: {},
    offsetX: 145,
    inner: null,
    currentElement: null
  });
  const floatingBarElement = useRef(null);
  const editor = useGetter('editor', 'data', []);
  const moveBlock = useDispatch('editor', 'moveBlock');
  const setCurrentTab = useDispatch('editor', 'showSidebar');
  const setFlexRow = useDispatch('editor', 'setFlexRow');
  const setFlexCol = useDispatch('editor', 'setFlexCol');
  const deleteBlock = useDispatch('editor', 'deleteBlock');
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
  const showDialog = useCallback((action: any) => {
    console.log('action', action);
  }, [])
  return editor.current ? (
    <>
      {/**<div className={"absolute left-0 z-highest"}>**/}
      <div ref={floatingBarElement} className={` h-8 flex items-center gap-3 absolute z-highest justify-center bg-white text-black shadow text-xs px-2 cursor-pointer -mt-10`}>
        <small className="chip bg-blue-400 capitalize" onClick={close}>{editor.current.element} {editor.current.tag}</small>
        <div className="floating-icon text-gray-400 hover:text-purple-600 text-xs" onClick={() => moveBlock(1)}>
          Move up
        </div>
        {editor.current.type === 'container' && (
          <div className="floating-icon text-gray-400 hover:text-purple-600 text-sm" onClick={() => setCurrentTab('elements')}>
            Add element
          </div>
        )}
        {editor.current.tag === 'flex' && (
          <div className="floating-icon text-gray-400 hover:text-purple-600 text-sm" onClick={setFlexRow}>
            Direction row
          </div>
        )}
        {editor.current.tag === 'flex' && (
          <div className="floating-icon text-gray-400 hover:text-purple-600 text-sm" onClick={setFlexCol}>
            Direction column
          </div>
        )}

        {state.icons.map((icon, index) => (
          <div key={index} className="floating-icon text-gray-400 hover:text-purple-600 text-sm" onClick={() => showDialog(icon)}>
            {icon.title}
          </div>
        ))}
        <div className="floating-icon text-gray-400 hover:text-purple-600 text-sm" onClick={deleteBlock}>
          Delete block
        </div>
      </div>

      {/**</div>**/}
    </>
  ) : null;
}
export default BlockFloating;
