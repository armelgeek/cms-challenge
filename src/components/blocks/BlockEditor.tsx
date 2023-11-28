import React, { useCallback, useEffect, useRef, useState } from "react";
import BlockContainer from "./BlockContainer";
import { useDispatch, useGetter } from "../../store";
import { FiSettings, FiSmartphone } from "react-icons/fi";
import _ from 'lodash'
import { FaCamera, FaJsfiddle, FaJsSquare } from "react-icons/fa";
import { MdDelete, MdFlipCameraAndroid, MdOutlinePreview } from "react-icons/md";
import DOMPurify from 'dompurify';
import BlockFloatingAction from "../../components/blocks/components/BlockFloatingAction";
import BlockFloating from "../../components/blocks/components/BlockFloating";
import { BsLaptop, BsTablet, BsTabletFill, BsTabletLandscape } from "react-icons/bs";
import EditorFooter from "../../Footer";
import Test from "../../Test";
import Tabs from "../desktop/Tabs";

const BlockEditor = () => {
  const [state, setState] = useState({
    currentSize: null,
    mode: 'base',
    customZoom: 0.5,
    scroll: 0,
    orientation: false,
    viewBlocks: false,
    elementLink: false,
    elementFloating: false,
    elementContent: false,
    floatingID: null,
    display: true,
    editorOffsetX: 16,
    editorOffsetY: 88,
    coords: {
      top: 0,
      left: 0,
      offsetX: 0,
      offsetY: 0
    },

    containerCoords: {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    },
    component: null,
    actionComponent: null,
    actionStile: '',
    actionTitle: '',
    options: null,
    action: null,
    timer: null
  } as any);

  const editor = useGetter('editor', 'data', []);
  const desktop = useGetter('desktop', 'data', []);
  const mainEditor = useRef();
  const blockEditor = useRef();
  const setInfo = useDispatch('editor', 'setInfo');
  const deleteBlock = useDispatch('editor', 'deleteBlock');
  const setDesktopInfo = useDispatch('desktop', 'setInfo');
  const floatRef = useRef(null);
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
  function getCoords(id: any) {
    let previewFrame = document.querySelector("#preview-frame");
    if(previewFrame){
      let el = previewFrame?.contentWindow.document.querySelector('#' + id) as any;
      if(!el) return null;
      try {
        return el.getBoundingClientRect()
      } catch (err) {
        return null
      }
    }

  }
  const setCurrent = useCallback((element: any,elementWidth:any) => {
    element.css.css = DOMPurify.sanitize(element.css.css);
    setInfo({
      prop: 'current',
      value: element
    })
    updateStateAttributes({
      'action': null
    })
    let coords = getCoords(element.id)
    console.log('flottating',floatRef.current?.offsetWidth);
    if (coords) {
      let containerCoords = {
        top: (coords.top  + window.scrollY) + coords.height,
        left: coords.left + window.scrollX +  coords.width / 2 - elementWidth / 2,

      }

      console.log('coordscoords',containerCoords);
      console.log('container', containerCoords);
      updateStateAttributes({
        'containerCoords': containerCoords
      })
    }

  }, []);
  const ajustCoords = useCallback((element:any,elementWidth:any) => {
    let coords = getCoords(element.id)
    if(floatRef == null) return;
    if (coords) {
      let containerCoords = {
        top: (coords.top  + window.scrollY) + coords.height,
        left: coords.left + window.scrollX +  coords.width / 2 - elementWidth / 2,

      }
      updateStateAttributes({
        'containerCoords': containerCoords
      })
    }
  },[]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      updateStateAttributes({
        'scroll': e.target.scrollTop
      })
      console.log('Element is scrolled!');
    };
    const element = mainEditor.current as any;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }

  }, [mainEditor]);
  useEffect(() => {
    if (!editor.document) {

    }
    updateStateAttributes({
      'action': null,
      'actionComponent': null,
      'containerCoords': { 'top': state.containerCoords.top - state.scroll }
    })
  }, []);
  const close = useCallback(() => {
    updateStateAttributes({
      'actionComponent': null
    })
  }, [])
  const closeBFloating = useCallback(() => {
    updateStateAttributes({
      'component': null,
      'actionComponent': null
    })
  }, [state]);
  if (!_.isEmpty(editor.page) && !_.isEmpty(editor.document)) {
    return (
      <div id="mainEditor" ref={mainEditor} className="bg-gray-100 min-h-screen text-black overflow-y-auto">
        {/**<div className="h-8 mt-8 p-1 bg-white text-gray-800 w-full fixed flex flex-row items-center left-0 top-0 z-2xtop shadow cursor-pointer">
          <span className="ml-2 chip text-gray-100 bg-purple-800">{editor.page.name}</span><span className="chip bg-gray-100 text-black ml-1">{editor.page.category}</span>
          <FiSettings className="text-gray-400 ml-4 text-2xl hover:text-purple-600" title="Template settings" />
          <FaJsSquare className="text-gray-400 ml-4 text-2xl hover:text-purple-600" title="Add Javascript" />
          <MdOutlinePreview className="text-gray-400 ml-4 text-2xl hover:text-purple-600" title="Preview" />
          <MdDelete onClick={deleteBlock} className="text-gray-400 ml-4 text-2xl hover:text-purple-600 cursor-pointer" title="Delete Block" />
        </div>**/}

        <Test setCurrent={setCurrent}>
          <div id="BlockEditor">
            {editor.document && (<BlockContainer
              doc={editor.document}
              setCurrent={setCurrent}
              level="10"
              ajustCoords={ajustCoords}
            />)}
          </div>

          <BlockFloating
            close={closeBFloating}
            floatRef={floatRef}
            coords={state.containerCoords}
            component={state.component ? 'opacity-100' : 'opacity-0'} />

          {/**{editor.current && state.viewBlocks && (
            <pre>
              {editor.current.tag}
              {editor.current}
            </pre>
          )}**/}
        </Test>
      </div>
    );
  } else {
    return null;
  }

};
export default BlockEditor;
