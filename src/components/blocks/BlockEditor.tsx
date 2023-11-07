import React, { useCallback, useEffect, useRef, useState } from "react";
import BlockContainer from "./BlockContainer";
import { useDispatch, useGetter } from "../../store";
import { FiSettings, FiSmartphone } from "react-icons/fi";
import _ from 'lodash'
import { FaCamera, FaJsfiddle, FaJsSquare } from "react-icons/fa";
import { MdFlipCameraAndroid, MdOutlinePreview } from "react-icons/md";
import DOMPurify from 'dompurify';
import BlockFloatingAction from "../../components/blocks/components/BlockFloatingAction";
import BlockFloating from "../../components/blocks/components/BlockFloating";
import { BsLaptop, BsTablet, BsTabletFill, BsTabletLandscape } from "react-icons/bs";
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
      height: 0
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
  
  const mainEditor = useRef();
  const setInfo = useDispatch('editor', 'setInfo');
  const setDesktopInfo = useDispatch('desktop', 'setInfo');
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
  const setCurrent = useCallback((element: any) => {
    element.css.css = DOMPurify.sanitize(element.css.css);
    setInfo({
      prop: 'current',
      value: element
    })
    updateStateAttributes({
      'action': null
    })
  }, []);
  const setMode = useCallback((mode: any) => {
    updateStateAttributes({
      mode: mode
    })
    setDesktopInfo({
      prop: 'mode',
      value: mode
    })
  }, []);
  const toggleOrientation = useCallback(() => {
    updateStateAttributes({
      orientation: !state.orientation
    })
  }, []);
  const previewStyle = () => {
    if (state.mode === 'xs') {
      if (state.orientation) {
        updateStateAttributes({
          'currentSize': '800x375'
        })
      } else {
        updateStateAttributes({
          'currentSize': '375x800'
        })
      }
      return state.orientation ? "width:800px;height:375px;" : "width:375px;height:80vh;"
    }
    if (state.mode === 'md') {
      if (state.orientation) {
        updateStateAttributes({
          'currentSize': 1024 * state.customZoom + 'x' + 1366 * state.customZoom
        })
      } else {
        updateStateAttributes({
          'currentSize': 1366 * state.customZoom + 'x' + 1024 * state.customZoom
        })
      }
      return state.orientation ? "width:" + 1024 * state.customZoom + "px;height:" + 1366 * state.customZoom + "px;" : "width:" + 1366 * state.customZoom + "px;height:" + 1024 * state.customZoom + "px;"
    }
  }
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
        <div className="h-8 mt-8 p-1 bg-white text-gray-800 w-full fixed flex flex-row items-center left-0 top-0 z-2xtop shadow cursor-pointer">
          <span className="ml-2 chip text-gray-100 bg-purple-800">{editor.page.name}</span><span className="chip bg-gray-100 text-black ml-1">{editor.page.category}</span>
          <FiSettings className="text-gray-400 ml-4 text-2xl hover:text-purple-600" title="Template settings" />
          <FaJsSquare className="text-gray-400 ml-4 text-2xl hover:text-purple-600"  title="Add Javascript" />
          <MdOutlinePreview className="text-gray-400 ml-4 text-2xl hover:text-purple-600"  title="Preview" /> 
          <span className="absolute right-0 mr-12">X:{parseInt(state.containerCoords.left) - state.editorOffsetX} Y:{parseInt(String(state.containerCoords.top + scroll - state.editorOffsetY))} </span>
        </div>
        <div className="h-10 w-full gap-3 flex items-center justify-center pr-8 ">
          <BsLaptop size={32} className={`${state.mode == 'base' ? 'text-primary-500' : ''} cursor-pointer`} onClick={() => setMode('base')} />
          <BsTabletLandscape size={26} className={`${state.mode == 'md' ? 'text-primary-500' : ''} cursor-pointer`} onClick={() => setMode('md')} />
          <FiSmartphone size={24} className={`${state.mode == 'xs' ? 'text-primary-500' : ''} cursor-pointer`} onClick={() => setMode('xs')} />
          {state.mode != 'base' && (
            <MdFlipCameraAndroid className="cursor-pointer text-2xl mr-4" title="Change orientation" onClick={toggleOrientation} />
          )}
          {state.mode != 'md' && (
            <div className="flex mx-2">
              <button className="w-4 h-4 flex items-center text-xl justify-center rounded-l-lg bg-blue-400">-</button>
              <div className="h-4 w-10 bg-white text-black flex items-center justify-center">zoom</div>
              <button className="w-4 h-4 flex items-center text-xl justify-center rounded-r-lg bg-blue-400">+</button>
            </div>
          )}
          {state.mode != 'base' && (
            <div>{state.currentSize}</div>)
          }
        </div>
        <div className="flex flex-col overflow-y-auto overflow-x-hidden absolute inset-0 mt-10 laptop-view">
            <div className="p-4 pb-20" id="BlockEditor">
              {editor.document && (<BlockContainer
                doc={editor.document}
                current={setCurrent}
                level="10"
              />)}
            </div>
        </div>
      

        {editor.current && (
            <BlockFloatingAction
              className="z-50 bg-white modal"
              title={state.actionTitle}
              component={state.actionComponent}
              options={state.options}
              close={close}
            />
          )}
        <BlockFloating close={closeBFloating} component={state.component ? 'opacity-100' : 'opacity-0'} />
        {editor.current && state.viewBlocks && (
            <pre>
              {editor.current.tag}
              {editor.current}
            </pre>
        )}
      </div >
    );
  } else {
    return null;
  }

};
export default BlockEditor;
