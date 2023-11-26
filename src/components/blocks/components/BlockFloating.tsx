import React, { useCallback, useRef, useState } from 'react'
import { useGetter, useDispatch } from "../../../store";
import Template from "../../../utils/tail/templates";
import { FaArrowDown, FaArrowUp, FaCode, FaCopy, FaPlus, FaTrash } from 'react-icons/fa';
import { CgExtensionAdd } from "react-icons/cg";
import Modal from '../Modal';
const BlockFloating = ({ floatRef, coords }: any) => {
  const [state, setState] = useState({
    currentIcon: '',
    icons: [
      { icon: 'akar-icons:edit', title: 'Edit content', action: 'BlockEditContent', filter: null },
      { icon: 'bx:bx-heading', title: 'Heading', action: 'BlockHeading', filter: 'h' },
      { icon: 'akar-icons:image', title: 'Image', action: 'BlockImageUrl', filter: 'image' },
      { icon: 'akar-icons:link-chain', title: 'Link', action: 'BlockLink', filter: null }
    ]
  });
  const [show, setShow] = useState(false);
  const editor = useGetter('editor', 'data', []);
  const moveBlock = useDispatch('editor', 'moveBlock');
  const duplicateBlock = useDispatch('editor', 'duplicateBlock');
  const navigateToParent = useDispatch('editor', 'navigateToParent');
  const setCurrentTab = useDispatch('editor', 'showSidebar');
  const deleteBlock = useDispatch('editor', 'deleteBlock');
  const desktop = useGetter('desktop', 'data', []);
  const setInfo = useDispatch('desktop', 'setInfo');
  const addToUKit = useDispatch('desktop', 'addToUKit');
  const savePage = useDispatch('editor', 'savePage');
  const updateKitBlock = useDispatch('editor', 'updateKitBlock');
  const uiks = [...desktop.uikits, ... new Template().kits()];

  return editor.current ? (
    <div
      ref={floatRef}
      className={` z-50 h-6 bg-slate-950 border border-b-0 font-bold  border-primary-500 flex items-center gap-3 absolute z-highest justify-center  px-2 cursor-pointer`}
      style={{
        top: coords.top,
        left: coords.left
      }}
    >
      <small className=" text-white  capitalize">{editor.current.element}</small>
      {editor.current.type === 'container' && (

        <div title={'Add in current UI Kit'} className="text-white  hover:text-purple-300 text-sm" onClick={() => setShow(!show)}>
          <CgExtensionAdd size={18} />
        </div>
      )}
      <div title={'Export code'} className="text-white  hover:text-purple-300 text-sm" onClick={navigateToParent}>
        <FaCode size={12} />
      </div>
      <div title={'Move up'} className="text-white  hover:text-purple-300 text-xs" onClick={() => moveBlock(editor.current.id, 'up')}>
        <FaArrowUp size={12} />
      </div>
      <div title={'Move Down'} className="text-white  hover:text-purple-300 text-xs" onClick={() => moveBlock(editor.current.id, 'down')}>
        <FaArrowDown size={12} />
      </div>
      <div className="text-white  hover:text-purple-300 text-sm" onClick={deleteBlock}>
        <FaTrash size={12} />
      </div>
      <div className="text-white  hover:text-purple-300 text-sm" onClick={duplicateBlock}>
        <FaCopy size={12} />
      </div>
      {editor.current.type === 'container' && (
        <div className="text-white  hover:text-purple-300 text-sm" onClick={() => setCurrentTab('elements')}>
          <FaPlus size={12} />
        </div>
      )}
      <Modal
        title="Ajouter une nouvelle element"
        show={show}
        canSubmit={!!desktop.library.name}
        setShow={setShow}
        onSubmit={() => addToUKit(null)}
      >
        <label>Ajouter dans la section : </label>
        <select className="select" onChange={(e: any) => {
          setInfo({
            prop: 'library',
            value: {
              name: uiks[e.target.value].name,
              author: uiks[e.target.value].author,
              description: uiks[e.target.value].description,
              templates: uiks[e.target.value].json ? uiks[e.target.value].json.templates : uiks[e.target.value].templates,
            }
          })
        }}>
          <option value=""></option>
          {uiks.map((uik: any, i: number) => (
            <option value={i}>{uik.name}</option>
          ))}

        </select>

      </Modal>
      {/**{state.icons.map((icon, index) => (
        <div key={index} className="text-white  hover:text-purple-600 text-sm" onClick={() => {
          // showDialog(icon)
        }}>
          {icon.title}
        </div>
      ))}**/}

    </div>
  ) : null;
}
export default BlockFloating;
