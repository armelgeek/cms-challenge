import React, { useCallback, useEffect } from 'react'
import { useDispatch, useGetter } from '../../store';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

const Tabs = () => {
  const tabs = useGetter('desktop', 'tabs', []);
  const currentTab = useGetter('desktop', 'currentTab', []);
  console.log('currentTab: ', currentTab);
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
    <div className="fixed top-0 left-0 h-8 items-center bg-primary-900 w-screen z-modal flex flex-wrap">
      <FiMenu className="h-5 w-5 items-center justify-center flex text-white" />
      {tabs.map((tab: any, index: number) => (
        <div key={tab.label} title={tab.label} className={`${index === currentTab ? 'bg-white text-gray-400' : 'bg-purple-900'}  relative border-l border-r border-purple-600 rounded-t hover:bg-black px-2 flex items-center cursor-pointer h-8 w-32`}>
          <span onClick={()=> openTab(index)} className={`w-24 truncate ml-1`}>{tab.label}</span><AiFillCloseCircle className="absolute right-0 mr-2" onClick={() => removeTab(index)} />
        </div>
      ))}
    </div>);
  
}
export default Tabs;