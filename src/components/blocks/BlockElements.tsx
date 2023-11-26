import React, {useCallback, useState} from 'react';
import Element from '../../utils/tail/element';
import { useDispatch, useGetter } from '../../store';
import {MdOutlineExpandLess, MdOutlineExpandMore} from "react-icons/md";
import BlockLibrary from './components/BlockLibrary';
const BlockElements = () => {
  const [gr,setGr] =useState('');
  const editor = useGetter("editor","data",[]);
  const setCurrent = useDispatch("editor",'setCurrent');
  const setInfo = useDispatch('editor', 'setInfo');
  const createElement = useCallback((el:any) => {
    if (!editor.current) return;
    const element = new Element().createElement(el.name)?.setIcon(el.icon);
    editor.current.blocks.push(element)
    setInfo({
      prop: 'current',
      value: element
    })
   /** if ( element.helper ){
      this.$dialogBus ( 'editorHelper' , { content: element.helper , title: element.element.toUpperCase() , width: element.dialog } )
    } **/

  },[editor]);

  return (
    <div>
    {editor.elements && (
      <div className="relative">
        {editor.elements.map((group:any) => (
          <>
          <div key={group.label} className={`capitalize flex items-center cursor-pointer p-2  text-base ${gr === group.label ? 'bg-primary-500 text-white' : ''}`} onClick={() => setGr(gr === group.label ? null : group.label)}>
            {group.label}
            <div className="absolute right-0 m-1">
            {gr === group.label ?  <MdOutlineExpandLess/> : <MdOutlineExpandMore/>}
            </div>
          </div>
          <div key={group.label} className="flex  bg-slate-100 flex-row flex-wrap justify-center cursor-pointer p-2" style={{ display: gr === group.label ? 'flex' : 'none' }}>
            {group.elements.map((element:any) => (
              <div key={element.name} className="bg-white m-1 hover:bg-gray-100 flex flex-col items-center h-16 w-16 text-xs justify-center text-center text-gray-500 rounded hover:text-primary-600 shadow" onClick={() => createElement(element)}>
                {/**<div className="material-icons text-3xl">
                  {element.icon}
                </div>**/}
                {element.name}
              </div>
            ))}
          </div>
          </>
        ))}
        <div key="snippets" className={`capitalize cursor-pointer items-center flex p-2 text-gray-700 text-base ${gr === 'snippets' ? 'bg-bluegray-300 text-gray-200' : ''}`} onClick={() => gr === 'snippets' ? setGr('') : setGr('snippets')}>
          Snippets
          <div className="absolute right-0 m-1">
            {gr === 'snippets' ? <MdOutlineExpandLess/> : <MdOutlineExpandMore/>}
          </div>
        </div>
        {gr === 'snippets' && (
          <div className="relative w-full cursor-pointer">
            <BlockLibrary />
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default BlockElements;
