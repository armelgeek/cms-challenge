import React, { useCallback, useRef, useState } from 'react'
import Upload from 'rc-upload';
import { useGetter, useDispatch } from "../../../store";
import Template from "../../../utils/tail/templates";
import {
  FaArrowDown,
  FaArrowUp,
  FaCode,
  FaCopy,
  FaEdit,
  FaLayerGroup,
  FaPaintBrush,
  FaPlus,
  FaTextHeight,
  FaTrash,
  FaUpload
} from 'react-icons/fa';
import { RiPaintFill } from "react-icons/ri";
import { CgCopy, CgDuplicate, CgExtensionAdd } from "react-icons/cg";
import Modal from '../Modal';
import { MdCopyAll, MdDynamicForm } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import Element from '../../../utils/tail/element';
import { FaPaste } from 'react-icons/fa6';
import { FiCopy } from 'react-icons/fi';
import { PiCopy } from 'react-icons/pi';

function HorizontallyBound(childDiv: any) {
  let el = document.querySelector("#preview-frame").contentWindow.document.querySelector('#root') as any;
  let parentRect = el.getBoundingClientRect();
  console.log('parentReact', parentRect);
  if (childDiv) {

    let childRect = childDiv.getBoundingClientRect();
    console.log('childRect', childRect, childRect.width + childRect.x);
    return childRect.width + childRect.left >= parentRect.width;
  } else {
    return false;
  }
}
const BlockFloating = ({ floatRef, coords }: any) => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const editor = useGetter('editor', 'data', []);
  const [gr, setGr] = useState('structure');
  const moveBlock = useDispatch('editor', 'moveBlock');
  const duplicateBlock = useDispatch('editor', 'duplicateBlock');
  const deleteBlock = useDispatch('editor', 'deleteBlock');
  const setInfo = useDispatch('desktop', 'setInfo');
  const setInfos = useDispatch('desktop', 'setInfos');
  const copyStyleBlock = useDispatch('editor', 'copyStyleBlock');
  const pasteStyleBlock = useDispatch('editor', 'pasteStyleBlock');
  const copyBlock = useDispatch('editor', 'copyBlock');
  const pasteBlock = useDispatch('editor', 'pasteBlock');
  const getCurrentHTML = useDispatch('editor', 'getCurrentHTML');
  const resetSelectedBlock = useDispatch('editor', 'resetSelectedBlock');
  const setShow = useCallback((value: any, title: string, type: string) => {
    if (type == null) {
      setInfos({
        'modal.show': value
      })
    } else {
      setInfos({
        'modal.show': value,
        'modal.type': type
      })
    }
    if (title != null) {
      setInfos({
        'modal.title': title
      })
    }

  }, [])
  const createElement = useCallback((el: any) => {
    if (!editor.current) return;
    const element = new Element().createElement(el.id)?.setIcon(el.icon);
    editor.current.blocks.push(element)
    setInfo({
      prop: 'current',
      value: element
    })
    setPopUpOpen(false);
  }, [editor]);

  const showSourceCode = useCallback((el: any) => {
    getCurrentHTML();
    setShow(true, "Code source", 'sourcecode');
  }, [])
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
  }, [editor])

  //  let bound = HorizontallyBound(floatRef.current);
  return editor.current ? (
    <div
      ref={floatRef}
      className={`z-50 h-6 bg-slate-950 border border-b-0 font-bold  border-blue-500 flex items-center gap-3 absolute z-highest justify-center  px-2 cursor-pointer`}
      style={{
        top: coords.top,
        left: coords.left
      }}
    >
      <small className=" text-white capitalize">{editor.current.tag == "document" ? "Body" : editor.current.title}</small>
      {editor.current.type === 'container' && (

        <div title={'Add in current UI Kit'} className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Ajouter dans le UI Kit", 'add-to-kit')}>
          <CgExtensionAdd size={18} />
        </div>
      )}
      <div title={'Export code'} className="text-white  hover:text-purple-300 text-sm" onClick={showSourceCode}>
        <FaCode size={12} />
      </div>

      {editor.current.tag != 'document' && (
        <>
          <div title={'Move up'} className="text-white  hover:text-purple-300 text-xs" onClick={() => moveBlock(editor.current.id, 'up')}>
            <FaArrowUp size={12} />
          </div>
          <div title={'Move Down'} className="text-white  hover:text-purple-300 text-xs" onClick={() => moveBlock(editor.current.id, 'down')}>
            <FaArrowDown size={12} />
          </div>
          {editor.current.element === 'img' && (
            <div title={'Upload Image'} className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Image", 'img')}>
              <FaUpload size={12} />
            </div>
          )}
          {editor.current.element === 'h' && (
            <div title={'Heading'} className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Heading", 'heading')}>
              <FaTextHeight size={12} />
            </div>
          )}
          {(editor.current.type == 'youtube' || editor.current.type == 'video') && (
            <div className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Editer le contenu", editor.current.type)}>
              <FaEdit size={12} />
            </div>
          )}
          {(editor.current.element == 'span' || editor.current.element == 'h' || editor.current.element == 'p' || editor.current.element == 'li' || editor.current.element == 'a') && (
            <div className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Editer le contenu", editor.current.element)}>
              <FaEdit size={12} />
            </div>
          )}

          {(editor.current.element == 'input') && (
            <div className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Formulaire", editor.current.element)}>
              <FaLayerGroup size={12} />
            </div>
          )}
          {(typeof editor.current.cssObject === 'object' &&
            !Array.isArray(editor.current.cssObject) &&
            editor.current.cssObject !== null) && (
              <>
                {(typeof editor.copiedCssObject === 'object' &&
                  !Array.isArray(editor.copiedCssObject) &&
                  editor.copiedCssObject !== null) ? (
                  <div title="paste style of block" className="text-white  hover:text-purple-300 text-sm" onClick={pasteStyleBlock}>
                    <RiPaintFill size={12} />
                  </div>
                ) : (
                  <div title="copy style of block" className="text-white  hover:text-purple-300 text-sm" onClick={copyStyleBlock}>
                    <FaPaintBrush size={12} />
                  </div>
                )}
              </>)}
          {(typeof editor.copiedObject === 'object' &&
            !Array.isArray(editor.copiedObject) &&
            editor.copiedObject !== null) ? (
            <div title="paste  block" className="text-white  hover:text-purple-300 text-sm" onClick={pasteBlock}>
              <FaPaste size={14} />
            </div>
          ) : (
            <div title="copy  block" className="text-white  hover:text-purple-300 text-sm" onClick={copyBlock}>
              <FiCopy size={14} />
            </div>
          )}
          
          <div title="Duplicate Block" className="text-white  hover:text-purple-300 text-sm" onClick={duplicateElement}>
            <MdCopyAll size={14} />
          </div>
          <div title="Delete Block" className="text-white  hover:text-purple-300 text-sm" onClick={deleteElement}>
            <FaTrash size={12} />
          </div>
        </>
      )}
      {/**{editor.current.type === 'container' && (
        <div className="text-white  hover:text-purple-300 text-sm" onClick={(e) => {
          setPopUpOpen(!isPopUpOpen);
        }}>
          <FaPlus size={12} />
        </div>
      )}


      {state.icons.map((icon, index) => (
        <div key={index} className="text-white  hover:text-purple-600 text-sm" onClick={() => {
          // showDialog(icon)
        }}>
          {icon.title}
        </div>
      ))}**/}
      {floatRef.current != null && floatRef.current.offsetHeight && isPopUpOpen && (
        <div className="absolute w-96 h-72 border border-dark-800 rounded-tl-none rounded-lg  bg-gray-950" style={{
          top: floatRef.current.offsetHeight - 1,
          left: 0,
        }}>

          <div className="flex max-w-full overflow-x-auto overflow-y-hidden flex-col w-full">
            <div className="btn-group flex flex-row my-1 rounded-sm justify-center">
              {editor.elements.map((group: any) => (
                <React.Fragment key={Math.random().toString(36).substring(7)}>
                  <button title={group.label} className={`btn font-medium rounded-full btn-xs px-2 py-2 bg-${gr === group.label ? 'primary-500 text-white' : 'slate-300 text-gray-950'}`} onClick={() => setGr(gr === group.label ? null : group.label)}>
                    {group.label}
                  </button>

                </React.Fragment>
              ))}
            </div>
            <div className="w-full h-72 max-h-72 overflow-x-hidden overflow-y-auto">
              {editor.elements.map((group: any) => (
                <div key={group.label} className="flex  bg-gray-950 flex-row flex-wrap justify-center cursor-pointer" style={{ display: gr === group.label ? 'flex' : 'none' }}>
                  {group.elements.map((element: any) => (
                    <div key={element.name} className="bg-slate-800 border border-dark-800  m-1 hover:bg-slate-700 flex w-20 flex-row gap-2 items-center h-8 text-xs justify-center text-center text-slate-200 rounded hover:text-primary-600 shadow" onClick={() => createElement(element)}>
                      {/** {element.icon} */}
                      {element.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  ) : null;
}
export default BlockFloating;
