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

const zooming = (value: any, zoomLevel: any) => {
  const zoomFactor = parseFloat(zoomLevel.replace('%', '')) / 100;
  return value * zoomFactor;
};
const ResponsiveTest = ({ brands, resizeTo }: any) => {
  return (
    <select className='select w-28 select-sm' onChange={(e: any) => {
      const device = JSON.parse(e.target.value);
      resizeTo(device.width, device.height, device.pixelRatio)
    }}>
      {brands.map((device: any, j: number) => (
        <option key={j} value={JSON.stringify(device)}>
          {device.width} X {device.height}
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
  const closeSidebar = useDispatch('editor', 'closeSidebar');
  const setInfo = useDispatch('desktop', 'setInfo');
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
  };

  const handleZoomChange = (zoomLevel: any) => {
    const zoomFactor = parseFloat(zoomLevel.replace('%', '')) / 100;
    if (zoomFactor !== w / originalWidth) {
      resizeTo(originalWidth * zoomFactor, originalHeight * zoomFactor, pxd);
    }
  };
  const setMode = (mode: any) => {
    setInfo({
      prop: 'mode',
      value: mode
    })
  }
  return (
    <div className='relative'>
      <div className="sticky top-0">
        <div className="z-50 bg-white py-1 flex border flex-row justify-between item-center px-3">
          <div className="brand">
            <h3 className='text-primary-500'>Logo</h3>
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
          <div className="flex flex-row items-center gap-3">
            <div className='flex flex-row  border rounded-full gap-2 p-1 border-gray-300'>
              <div onClick={() => setMode('base')} className={`cursor-pointer badge badge-${desktop.mode == 'base' ? 'primary' : 'default'} px-3 py-1 border rounded-2xl`}>ALL</div>
              <div onClick={() => setMode('sm')} className={`cursor-pointer badge badge-${desktop.mode == 'sm' ? 'primary' : 'default'} px-3 py-1 border rounded-2xl`}>SM</div>
              <div onClick={() => setMode('md')} className={`cursor-pointer badge badge-${desktop.mode == 'md' ? 'primary' : 'default'} px-3 py-1 border rounded-2xl`}>MD</div>
              <div onClick={() => setMode('lg')} className={`cursor-pointer badge badge-${desktop.mode == 'lg' ? 'primary' : 'default'} px-3 py-1 border rounded-2xl`}>LG</div>
              <div onClick={() => setMode('xl')} className={`cursor-pointer badge badge-${desktop.mode == 'xl' ? 'primary' : 'default'} px-3 py-1 border rounded-2xl`}>XL</div>
              <div onClick={() => setMode('xxl')} className={`badge badge-${desktop.mode == 'xxl' ? 'primary' : 'default'} px-3 py-1 border rounded-2xl`}>2XL</div>
            </div>
            <div className="undo" title='undo'>
              <button className='btn btn-sm bg-white border'>
                <FaUndo />
              </button>
            </div>
            <div className="redo" title='redo'>
              <button className='btn  btn-sm bg-white border'>
                <FaRedo />
              </button>
            </div>
            <div className="flex flex-row gap-1 justify-center">
              <button className='btn bg-primary-500 btn-sm text-white'><FaFileExport /> Export</button>
            </div>
            <div className="flex flex-row gap-1 justify-center">
              <button className='btn bg-primary-500 text-white'><FaSave /></button>
            </div>
            <div className="flex flex-row gap-1 justify-center">
              <button className='btn bg-primary-500 text-white'><FaEye /></button>
            </div>
          </div>
        </div>

        {tabs.length > 0 && <Tabs />}
      </div>
      {/**<div className="mt-2 relative flex flex-row gap-5">
        <div className="w-48 sticky top-0 h-96 ml-2">
          <BlockTree editor={editor.current} />
        </div>
        <div className='border border-gray-300' style={{
          width: w,
          height: h,
          maxHeight: h,
          overflow: 'auto'
        }}>
          {children}
        </div>
        <div className="absolute flex flex-row right-5 top-0 pr-2">
          {editor.sidebar.show && (
            <div className=" z-50  bg-white w-52 border-l">
              <EditorSidebar tab={editor.sidebar.name} close={closeSidebar} />
            </div>
          )}
          {editor.current && (
            <div className="bg-white z-50 w-10   flex flex-col items-center justify-start text-center">
              <EditorSidebarTabs tab={editor.sidebar.name} setCurrentTab={setCurrentTab} />
            </div>
          )}
        </div>
          </div>**/}
      <div className="flex h-screen pt-3 px-2">

        <div className="w-1/6">
          <div className="flex flex-row  border  gap-2 p-1 border-gray-300">
            <div onClick={() => setChoice(0)} className={`uppercase cursor-pointer badge badge-${choice == 0 ? 'primary' : 'default  bg-white'} px-3 py-1 border rounded-xl`}>Block Tree</div>
            <div onClick={() => setChoice(1)} className={`uppercase cursor-pointer badge badge-${choice == 1 ? 'primary' : 'default  bg-white'} px-3 py-1 border rounded-xl`}>Templates</div>
          </div>

          {choice == 0 && (
            <>
              <ul className="tree">
                <BlockTree editor={editor.document} setCurrent={setCurrent} />
              </ul>
            </>
          )}
          {choice == 1 && (
            <UserLibrary />
          )}
        </div>

        <div className="flex-1 overflow-y-auto flex justify-center border">
          <div className='border bg-white' style={{
            width: w,
            height: h,
            maxHeight: h,
            overflow: 'auto'
          }}>
            {children}
          </div>
        </div>
        <div className="w-1/6  bg-white">
          <div className="flex flex-col">

            <div className="flex flex-row">
              {editor.sidebar.show && (
                <div className=" z-50  bg-white w-52">
                  <EditorSidebar tab={editor.sidebar.name} close={closeSidebar} />
                </div>
              )}
              {editor.current && (
                <div className="bg-white z-50 w-10   flex flex-col items-center justify-start text-center">
                  <EditorSidebarTabs tab={editor.sidebar.name} setCurrentTab={setCurrentTab} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test;
