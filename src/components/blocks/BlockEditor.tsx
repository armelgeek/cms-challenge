import React, {useCallback, useEffect, useRef, useState} from "react";
import BlockContainer from "./BlockContainer";
import { useDispatch, useGetter } from "../../store";
import { FiSettings } from "react-icons/fi";
import _ from 'lodash'
import {FaJsfiddle, FaJsSquare} from "react-icons/fa";
import {MdOutlinePreview} from "react-icons/md";
import DOMPurify from 'dompurify';
import BlockFloatingAction from "../../components/blocks/components/BlockFloatingAction";
import BlockFloating from "../../components/blocks/components/BlockFloating";
const BlockEditor = () => {
  const [state,setState] =  useState({
    scroll: 0,
    viewBlocks : false,
    elementLink : false,
    elementFloating: false,
    elementContent: false,
    floatingID : null,
    display: true,
    editorOffsetX:16,
    editorOffsetY:88,
    coords: {
      top: 0,
      left: 0,
      offsetX: 0,
      offsetY: 0
    },

    containerCoords: {
      top: 0,
      left:0,
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
  const [floatingElement,setFloatingElement] = useState(false);
  const mainEditor = useRef();
  const setInfo = useDispatch('editor', 'setInfo');
  const updateStateAttributes = useCallback((updates:any) => {
    setState((prevState:any) => ({
      ...prevState,
      ...Object.keys(updates).reduce((acc:any, key) => {
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
  },[state]);
  const setCurrent = useCallback((element: any) => {
    element.css.css = DOMPurify.sanitize(element.css.css);
    setInfo({
      prop: 'current',
      value: element
    })
    updateStateAttributes({
      'action':  null
    })
  }, []);
  useEffect(() => {
    const handleScroll = (e:any) => {
      updateStateAttributes({
        'scroll':  e.target.scrollTop
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
    if ( !editor.document ) {

    }
    updateStateAttributes({
      'action': null,
      'actionComponent': null,
      'containerCoords': {'top': state.containerCoords.top - state.scroll}
    })
  }, []);
  const close = useCallback(()=>{
    updateStateAttributes({
      'actionComponent': null
    })
  },[])
  const closeBFloating = useCallback(()=>{
    updateStateAttributes({
      'component': null,
      'actionComponent': null
    })
  },[state]);
  if (!_.isEmpty(editor.page) && !_.isEmpty(editor.document)) {
    return (
      <div id="mainEditor" ref={mainEditor} className="bg-gray-100 min-h-screen text-black overflow-y-auto">
        <div className="h-8 mt-8 p-1 bg-white text-gray-800 w-full fixed flex flex-row items-center left-0 top-0 z-2xtop shadow cursor-pointer">
          <span className="ml-2 chip text-gray-100 bg-purple-800" v-if="editor.page">{editor.page.name}</span><span className="chip bg-gray-100 text-black ml-1">{editor.page.category}</span>
          <FiSettings className="text-gray-400 ml-4 text-2xl hover:text-purple-600" title="Template settings" />
          <FaJsSquare className="text-gray-400 ml-4 text-2xl hover:text-purple-600"  title="Add Javascript" />
          <MdOutlinePreview className="text-gray-400 ml-4 text-2xl hover:text-purple-600"  title="Preview" />
          <span className="absolute right-0 mr-12">X:{parseInt(state.containerCoords.left)-state.editorOffsetX } Y:{ parseInt(String(state.containerCoords.top + scroll - state.editorOffsetY) ) } </span>
        </div>
        <div className="p-4 mt-12 pb-20" id="BlockEditor">
          {editor.document && (<BlockContainer
              doc={editor.document}
              current={setCurrent}
              level="10"
          />)}
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
        <BlockFloating close={closeBFloating}  component={state.component ? 'opacity-100' : 'opacity-0'}/>
        {editor.current && state.viewBlocks && (
          <pre>
              {editor.current.tag}
            {editor.current}
          </pre>
        )}
      </div>
    );
  }else{
    return null;
  }
 
};
export default BlockEditor;
