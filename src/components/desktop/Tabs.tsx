import React, { useCallback, useEffect } from 'react'
import { useDispatch, useGetter } from '../../store';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaPlusCircle } from 'react-icons/fa';

const Tabs = () => {
  const tabs = useGetter('desktop', 'tabs', []);
  const currentTab = useGetter('desktop', 'currentTab', []);
  const handleChangeDesktopInfo = useDispatch('desktop', 'setInfo');
  const handleChangeEditorInfo = useDispatch('editor', 'setInfo');
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
        <div key={tab.label} title={tab.label} className={`${index === currentTab ? 'bg-white text-gray-400' : 'bg-purple-900'}  relative border-l border-t border-r border-purple-600 rounded-t hover:bg-black px-2 flex items-center cursor-pointer h-8`}>
          <span onClick={()=> openTab(index)} className={`truncate ml-1 text-sm`}>{tab.label}</span><AiFillCloseCircle className="text-gray-400 absolute right-0 mr-2" onClick={() => removeTab(index)} />
        </div>
      ))}
      <div className={`relative  px-2  cursor-pointer`} >
          <FaPlusCircle className="text-white"/>
        </div>
    </div>);
  
}
export default Tabs;