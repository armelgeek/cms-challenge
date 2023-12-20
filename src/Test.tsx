import React, { useState, useEffect, useCallback, Children } from 'react';
import { devices } from './utils/tail/devices';
import { FaEye, FaFileExport, FaRedo, FaRetweet, FaSave, FaUndo } from 'react-icons/fa';
import IFrame, { FrameContext } from '@uiw/react-iframe';
import Tabs from './components/desktop/Tabs';
import { useDispatch, useGetter } from './store';
import BlockTree from './components/blocks/components/BlockTree';
import EditorSidebar from './components/editor/EditorSidebar';
import EditorSidebarTabs from './components/editor/EditorSidebarTabs';
import UserLibrary from './components/editor/UserLibrary';
import Frame from 'react-frame-component';
import jp from 'jsonpath';
import Element from './utils/tail/element';

const zooming = (value: any, zoomLevel: any) => {
  const zoomFactor = parseFloat(zoomLevel.replace('%', '')) / 100;
  return value * zoomFactor;
};
const ResponsiveTest = ({ brands, resizeTo }: any) => {
  return (
    <select className='select w-52' onChange={(e: any) => {
      const device = JSON.parse(e.target.value);
      resizeTo(device.width, device.height, device.pixelRatio)
    }}>
      {brands.map((device: any, j: number) => (
        <option key={j} value={JSON.stringify(device)}>
          {device.name} - ({device.width} x {device.height})
        </option>
      ))}
    </select>
  );
};
const Test = ({ children, setCurrent }: any) => {
  const zoomLevels = ["100%", "75%", "50%", "25%"];
  const tabs = useGetter('desktop', 'tabs', []);
  const editor = useGetter('editor', 'data', []);
  const desktop = useGetter('desktop', 'data', []);
  const setCurrentTab = useDispatch('editor', 'showSidebar');
  const exportBuild = useDispatch('desktop', 'exportBuild');

  const setInfo = useDispatch('desktop', 'setInfo');
  const setInfoEditor = useDispatch('editor', 'setInfo');
  const [isRotated, setIsRotated] = useState(false);
  const [w, setW] = useState(zooming(1280, "75%"));
  const [h, setH] = useState(zooming(800, "75%"));
  const [originalWidth, setOriginalWidth] = useState(zooming(1280, "75%"));
  const [originalHeight, setOriginalHeight] = useState(zooming(800, "75%"));
  const [pxd, setPxd] = useState(1);
  const [choice, setChoice] = useState(0);
  const toggleRotate = useCallback(() => {
    setIsRotated(!isRotated);
    if (!isRotated) {
      setW(zooming(h, "75%"));
      setH(zooming(w, "75%"));
      setOriginalWidth(zooming(h, "75%"));
      setOriginalHeight(zooming(w, "75%"));
    } else {
      setW(zooming(w, "75%"));
      setH(zooming(h, "75%"));
      setOriginalWidth(zooming(w, "75%"));
      setOriginalHeight(zooming(h, "75%"));
    }
  }, [w, h, isRotated]);

  const resizeTo = (width: any, height: any, pixelDestiny: any) => {
    setW(width);
    setH(height);
    setOriginalWidth(width);
    setOriginalHeight(height);
    setPxd(pixelDestiny);
    setInfoEditor({
      prop: 'current',
      value: null
    })
  };

  const handleZoomChange = (zoomLevel: any) => {
    const zoomFactor = parseFloat(zoomLevel.replace('%', '')) / 100;
    if (zoomFactor !== w / originalWidth) {
      resizeTo(originalWidth * zoomFactor, originalHeight * zoomFactor, pxd);
    }
  };
 
  const head = () => {
    let fonts = jp.query(editor.page.json.blocks, '$..blocks..font');
    let uniqueFonts = [...new Set(fonts.filter(a => a))];
    console.log('fonts', uniqueFonts);
    return (
      <style>
        {`${uniqueFonts.length && `@import url('https://fonts.googleapis.com/css?family=${uniqueFonts.join('|')}');`}`}
      </style>
    );
  };
  const createElement = useCallback((el: any) => {
    if (!editor.current) return;
    const element = new Element().createElement(el.id)?.setIcon(el.icon);
    editor.current.blocks.push(element)
    setInfo({
      prop: 'current',
      value: element
    })
  }, [editor]);
  const initialContent = () => {
    let icons = ''
    return `<!DOCTYPE html>
      <html>
        <head>
          <script src="http://localhost:5173/tailwind.css"></script>
          <link rel="stylesheet" href='http://localhost:5173/app.css'/>
        </head>
        <body>
          <div id="root"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/iconify/2.0.0/iconify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </body>
      </html>`
  }
  return (
    <div className='relative'>
      <div className="sticky top-0">
        {/**<div className="z-50 py-1 flex border flex-row justify-between item-center px-3">
          <div className="brand">
            <h3 className='text-primary-500'>WindFlow Studio</h3>
          </div>
          <div className="flex flex-row gap-3 items-center z-30">
           <ResponsiveTest brands={devices} resizeTo={resizeTo} />
            <button type="button" className="btn btn-sm bg-primary-500 text-white" onClick={toggleRotate}><FaRetweet /></button>

            <div className="flex flex-row gap-2">
              <select className='select select-sm w-24' onClick={(e: any) => handleZoomChange(e.target.value)}>
                {zoomLevels.map((level) => (
                  <option
                    key={level}
                    value={level}
                  >
                    {level}
                  </option>
                ))}
              </select>
            </div>
              
          </div>

        </div>  **/}

        {tabs.length > 0 && <Tabs />}

        {/**<div className="flex flex-row gap-1 justify-center">
              <button className='btn bg-primary-500 btn-sm text-white' onClick={exportBuild}><FaFileExport /> Export</button>
            </div>
          **/}
      </div>
      <div className="flex h-screen pt-3 px-2">

        <div className='border-gray-200 dark:border-gray-600 w-1/6 border-r bg-white dark:bg-gray-800  z-30 h-screen'>
          <div className="flex flex-col h-full relative justify-around">
            <div className="overflow-y-auto overflow-x-hidden noscrollbar select-none flex-1 flex flex-col">
              <div className="flex flex-col flex-1">
                <div className="p-1 sticky top-0 z-20 border-b border-gray-200 dark:border-white dark:border-opacity-5 bg-white dark:bg-gray-800">
                  <div className="w-full flex rounded-md p-2 backdrop-filter backdrop-blur-lg bg-gray-200 bg-opacity-50 dark:bg-white dark:bg-opacity-5">
                    <button type="button" onClick={() => setChoice(0)} className={`${choice == 0 ? 'bg-white' : ''} flex items-center justify-center gap-1 w-full text-xs focus:outline-none focus:shadow-none leading-4 py-1 px-2 rounded min-w-0 text-gray-900 dark:text-white dark:bg-opacity-10 text-opacity-80`}><span >Layers</span></button>
                    <button type="button" onClick={() => setChoice(1)} className={`${choice == 1 ? 'bg-white' : ''} flex items-center justify-center gap-1 w-full text-xs focus:outline-none focus:shadow-none leading-4 py-1 px-2 rounded min-w-0 text-gray-900 dark:text-white dark:bg-opacity-10 text-opacity-80`}><span >Elements</span></button>
                    <button type="button" onClick={() => setChoice(2)} className={`${choice == 2 ? 'bg-white' : ''} flex items-center justify-center gap-1 w-full text-xs focus:outline-none focus:shadow-none leading-4 py-1 px-2 rounded min-w-0 text-gray-900 dark:text-white dark:bg-opacity-10 text-opacity-80`}><span >Layouts</span></button>
                  </div>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-white dark:divide-opacity-5 flex-1 mb-32">
                  {choice == 0 && (
                    <div className="pt-2 px-3">
                      <BlockTree editor={editor.document} setCurrent={setCurrent} />
                    </div>
                  )}
                  {choice == 1 && (
                    <>
                      {editor.elements.map((group: any) => (
                        <div className="px-3 py-3.5">
                          <div className="text-xs text-gray-700 text-opacity-60 capitalize mb-1.5">{group.label}</div>
                          <div className="grid grid-cols-2 gap-1">
                            {group.elements.map((element: any) => (
                              <div onClick={() => createElement(element)} className="p-3 bg-primary-500 hover:bg-primary-300 rounded-md text-white text-xs flex items-center transition ease-in duration-75 group cursor-pointer">
                                <span className='icons group-hover:opacity-75 opacity-50 mr-1.5'>

                                </span>
                                <span className='group-hover:opacity-100 opacity-75 leading-4 capitalize -my-0.5 truncate'> {element.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>))}</>
                  )}
                  {choice == 2 && (
                    <div className="px-3">
                      <UserLibrary />
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 flex-1 flex flex-col items-center bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="w-full h-full relative z-10 scrollbar overflow-scroll">

            <div className="absolute top-2 left-2 z-20 grid items-center justify-center">
              <IFrame head={head()} initialContent={initialContent()} id="preview-frame" style={{
                width: w,
                height: h,
                maxHeight: h,
                overflow: 'auto',
                backgroundColor: 'white'
              }}>
                {children}
              </IFrame>
            </div>
          </div>
        </div>
        <div className="w-1/6">
          
          <div className="border-gray-200 dark:border-gray-600 w-64 border-l order-last bg-white dark:bg-gray-800  z-30 h-full relative">
            {editor.current ? (
              <>
                <EditorSidebarTabs setCurrentTab={setCurrentTab}>
                  <EditorSidebar tab={editor.sidebar.name} />
                </EditorSidebarTabs>
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xl">
                Select a block
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
