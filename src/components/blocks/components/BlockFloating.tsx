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
  FaPlus,
  FaTextHeight,
  FaTrash,
  FaUpload
} from 'react-icons/fa';
import { CgExtensionAdd } from "react-icons/cg";
import Modal from '../Modal';
import { MdDynamicForm } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import Element from '../../../utils/tail/element';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState({
    currentIcon: '',
    icons: [
      { icon: 'akar-icons:edit', title: 'Edit content', action: 'BlockEditContent', filter: null },
      { icon: 'bx:bx-heading', title: 'Heading', action: 'BlockHeading', filter: 'h' },
      { icon: 'akar-icons:image', title: 'Image', action: 'BlockImageUrl', filter: 'image' },
      { icon: 'akar-icons:link-chain', title: 'Link', action: 'BlockLink', filter: null }
    ]
  });
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const editor = useGetter('editor', 'data', []);
  const [gr, setGr] = useState('Main');;
  const moveBlock = useDispatch('editor', 'moveBlock');
  const duplicateBlock = useDispatch('editor', 'duplicateBlock');
  const navigateToParent = useDispatch('editor', 'navigateToParent');
  const setCurrentTab = useDispatch('editor', 'showSidebar');
  const deleteBlock = useDispatch('editor', 'deleteBlock');
  const setInfo = useDispatch('desktop', 'setInfo');
  const setInfos = useDispatch('desktop', 'setInfos');
  const editBlockImageUrl = useDispatch('editor', 'editBlockImageUrl');
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
  const createElement = useCallback((el:any) => {
    if (!editor.current) return;
    const element = new Element().createElement(el.id)?.setIcon(el.icon);
    editor.current.blocks.push(element)
    setInfo({
      prop: 'current',
      value: element
    })
    setPopUpOpen(false);
  },[editor]);


  let bound = HorizontallyBound(floatRef.current);
  console.log('bound', gr);
  console.log('editor.current', editor.current);
  return editor.current ? (
    <div
      ref={floatRef}
      className={`z-50 h-6 bg-slate-950 border border-b-0 font-bold  border-primary-500 flex items-center gap-3 absolute z-highest justify-center  px-2 cursor-pointer`}
      style={{
        top: coords.top,
        left: coords.left
      }}
    >
      <small className=" text-white  capitalize">{editor.current.element}</small>
      {editor.current.type === 'container' && (

        <div title={'Add in current UI Kit'} className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Ajouter dans le UI Kit", 'add-to-kit')}>
          <CgExtensionAdd size={18} />
        </div>
      )}
      <div title={'Export code'} className="text-white  hover:text-purple-300 text-sm" onClick={navigateToParent}>
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
          {(editor.current.element == 'h' || editor.current.element == 'p' || editor.current.element == 'li') && (
            <div className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Editer le contenu", editor.current.element)}>
              <FaEdit size={12} />
            </div>
          )}

          {(editor.current.element == 'input') && (
            <div className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(true, "Formulaire", editor.current.element)}>
              <FaLayerGroup size={12} />
            </div>
          )}

          <div className="text-white  hover:text-purple-300 text-sm" onClick={deleteBlock}>
            <FaTrash size={12} />
          </div>
          <div className="text-white  hover:text-purple-300 text-sm" onClick={duplicateBlock}>
            <FaCopy size={12} />
          </div>
        </>
      )}
      {editor.current.type === 'container' && (
        <div className="text-white  hover:text-purple-300 text-sm" onClick={(e) => {
          setPopUpOpen(!isPopUpOpen);
        }}>
          <FaPlus size={12} />
        </div>
      )}


      {/**{state.icons.map((icon, index) => (
        <div key={index} className="text-white  hover:text-purple-600 text-sm" onClick={() => {
          // showDialog(icon)
        }}>
          {icon.title}
        </div>
      ))}**/}
      {floatRef.current != null && floatRef.current.offsetHeight && isPopUpOpen &&   (
        <div className="absolute w-60 h-72 border border-dark-800 rounded-tl-none rounded-lg  bg-gray-950" style={{
          top: floatRef.current.offsetHeight - 1,
          left: 0,
        }}>

          <div className="flex max-w-full overflow-x-auto overflow-y-hidden flex-col w-full">
            <div className="btn-group flex flex-row my-1 rounded-sm justify-center">
            {editor.elements.map((group: any) => (
              <React.Fragment key={Math.random().toString(36).substring(7)}>
                <button className={`btn font-medium rounded-full btn-xs px-2 py-2 bg-${gr === group.label ? 'primary-500 text-white' : 'slate-300 text-gray-950'}`} onClick={() => setGr(gr === group.label ? null : group.label)}>
                  {group.label}
                </button>

              </React.Fragment>
            ))}
            </div>
            <div className="w-full h-72 max-h-72 overflow-x-hidden overflow-y-auto">
            {editor.elements.map((group: any) => (
              <div key={group.label} className="flex  bg-gray-950 flex-row flex-wrap justify-center cursor-pointer" style={{ display: gr === group.label ? 'flex' : 'none' }}>
                {group.elements.map((element: any) => (
                  <div key={element.name} className="bg-slate-800 border border-dark-800  m-1 hover:bg-slate-700 flex w-16 flex-col items-center h-16 text-xs justify-center text-center text-slate-200 rounded hover:text-primary-600 shadow" onClick={() => createElement(element)}>
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
