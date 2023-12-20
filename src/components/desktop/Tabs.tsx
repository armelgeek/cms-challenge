import React, { useCallback, useEffect } from 'react'
import { useDispatch, useGetter } from '../../store';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaEdit, FaPlusCircle } from 'react-icons/fa';

const Tabs = () => {
  const tabs = useGetter('desktop', 'tabs', []);
  const currentTab = useGetter('desktop', 'currentTab', []);
  const handleChangeDesktopInfo = useDispatch('desktop', 'setInfo');
  const createEmptyBlock = useDispatch('editor', 'createEmptyBlock');
  const handleChangeEditorInfo = useDispatch('editor', 'setInfo');
  const updateProject = useDispatch('editor', 'updateProject');
  const removeTab = useDispatch('desktop', 'removeTab');
  const openTab = useCallback((index: number) => {
    handleChangeDesktopInfo({
      prop: 'currentTab',
      value: index
    })
  }, [])
  useEffect(() => {
    if (tabs.length) {
      if (tabs[tabs.length - 1].type === 'editor') {
        handleChangeEditorInfo({
          prop: 'page',
          value: tabs[tabs.length - 1].object
        });
        handleChangeEditorInfo({
          prop: 'document',
          value: tabs[tabs.length - 1].object.json.blocks
        })
      }
      if (tabs[tabs.length - 1].type === 'component') {
        handleChangeEditorInfo({
          prop: 'component',
          value: tabs[tabs.length - 1].object
        });
      }
      handleChangeDesktopInfo({
        prop: 'currentTab',
        value: tabs.length - 1
      });
    } else {
      handleChangeEditorInfo({
        prop: 'component',
        value: null
      });
    }

  }, [tabs])
  useEffect(() => {
    if (currentTab < 0) return
    let tab = tabs[currentTab]
    if (tab.type === 'editor') {
      handleChangeEditorInfo({
        prop: 'page',
        value: tab.object
      });
      handleChangeEditorInfo({
        prop: 'document',
        value: tab.object.json.blocks
      })
    }
    if (tab.type === 'component') {
      handleChangeEditorInfo({
        prop: 'component',
        value: tab.object
      });
    }
  }, [currentTab])
  return (
    <div className="h-8 items-center border-b bg-white  border-gray-300 w-screen flex flex-wrap">
      {tabs.map((tab: any, index: number) => (
        <div key={tab.label} title={tab.label} className={`w-56 mx-1 ${index === currentTab ? 'bg-white text-gray-400' : 'bg-primary-200'}  relative border-l border-t border-r border-primary-600 rounded-t px-2  flex items-center cursor-pointer h-8`}>
          
          <div 
         // contentEditable={true}
         /** onBlur={(e: any) => {
            //Todo: debouce 
            updateProject(e.currentTarget.textContent,'name');
          }} */
          onClick={()=> openTab(index)} className={`truncate mx-3 text-sm bg-gray-700 w-52 text-white px-3 rounded-xl`}>{tab.label}</div><FaEdit className='mr-2'></FaEdit><AiFillCloseCircle className="text-gray-700 absolute right-0 mx-2" onClick={() => removeTab(index)} />
        </div>
      ))}
      <div className={`relative  px-2  cursor-pointer`} onClick={createEmptyBlock}>
          <FaPlusCircle className="text-primary-500"/>
        </div>
    </div>);
  
}
export default Tabs;