import React, { useState, useCallback, useEffect, useRef, memo } from 'react'
import _ from 'lodash';
import classes from '../../../utils/scripts/tw.classes';
import { useDispatch, useGetter } from '../../../store';
import { flattenClasses, searchClass } from  '../../../utils/scripts/tw.classes';
import { FaMinusCircle } from 'react-icons/fa';
const classList = flattenClasses();
console.log('classList', classList);
const ScrollItem = memo(({ selectTag, item, index }: any) => {
  return (
    <div className="text-sm  lowercase suggestion-item" key={item.attr + '--' + index} onClick={() => {
      selectTag(item.value, item.attr)
    }}> {item.value}</div>
  )
}, (prevProps: any, nextProps: any) => prevProps.item === nextProps.item && prevProps.index === nextProps.index)
const ScrollableList = ({ items, containerRef, selectTag }: any) => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    const container = containerRef.current as any;

    if (container) {
      const scrolledToBottom =
        Math.round(container.scrollTop + container.clientHeight + 2) >= container.scrollHeight;
      if (scrolledToBottom && !loading && visibleItems < items.length) {
        setLoading(true);
        setTimeout(() => {
          setVisibleItems((prevVisibleItems) => Math.min(prevVisibleItems + 10, items.length));
          setLoading(false);
        }, 100);
      }
    }
  }, [loading, items])

  useEffect(() => {
    const container = containerRef.current as any;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [containerRef, loading, visibleItems, items])

  const renderedItems = items.slice(0, visibleItems).map((item: any, index: any) => (
    <ScrollItem item={item} index={index} selectTag={selectTag} />
  ));
  return (
    <>
      {renderedItems}
    </>
  );
};
const BlockCss = () => {
  const [semantics, seSemantics] = useState(classes.semantics);
  const containerRef = useRef();
  const [cls, setCls] = useState([]);
  const [text, setText] = useState('');
  const editor = useGetter('editor', 'data', []);
  const desktop = useGetter('desktop', 'data', []);
  const updateBlockStyle = useDispatch('editor', 'updateBlockStyle');
  const [state, setState] = useState({
    css: editor?.current?.cssObject,
    container: editor?.current?.css.container,
    style: editor?.current?.style,
    semantic: editor?.current?.semantic,
  })
  const updateCss = useCallback((classe: any, attr: any) => {
    editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`] = {
      ...editor.current.cssObject[`${desktop.mode}`][`${desktop.state}`],
      [attr]: classe
    };
    updateBlockStyle(editor.current.cssObject);

  }, [editor.current, desktop.mode,desktop.state])
  const updateBlockProperty = useDispatch('editor', 'updateBlockProperty');
  const updateValue = useCallback((value: any, type: any) => {
    if (type != 'style') {
      updateBlockProperty(value, 'element');
    }
    updateBlockProperty(value, type);
  }, [])
  useEffect(() => {
    setState({
      css: editor?.current?.cssObject,
      container: editor?.current?.css.container,
      style: editor?.current?.style,
      semantic: editor?.current?.semantic,
    });
  }, [editor?.current])
  const handleSearh = useCallback((value: any) => {
    setText(value);
    if (value.length > 1) {
      setCls(searchClass(classList, value));
    };
  }, [])
  const selectTag = useCallback((value: any, key: string) => {
    updateCss(value, key);
    setCls([]);
    setText('');
  }, [])
  return (
    <div className="flex flex-col w-full h-full items-start bg-bluegray-200">
      <span className="uppercase font-bold  my-2" style={{fontSize: '10px'}}>CSS</span>
      <div className="tag-input-sg-container  w-full">
        <input type="text" value={text} className="w-full input-sm  rounded-md  border-gray-200 focus:outline-0 focus:shadow-none focus:focus-within:ring-0 text-sm" placeholder='Search class' onChange={(e) => handleSearh(e.target.value)} />
        <div className="suggestions-container" ref={containerRef} style={{
          display: cls.length > 0 ? 'block' : 'none'
        }}>
          <ScrollableList items={cls} containerRef={containerRef} selectTag={selectTag} />
        </div>
        <div className="flex flex-row flex-wrap gap-2 py-2">
          {!_.isUndefined(state.css[`${desktop.mode}`][`${desktop.state}`]) && !_.isNull(state.css[`${desktop.mode}`][`${desktop.state}`]) && Object.keys(state.css[`${desktop.mode}`][`${desktop.state}`]).map((item) => {
            return state.css[`${desktop.mode}`][`${desktop.state}`][item] != '' ? (
              <div className="badge badge-primary tex-sm rounded-full text-xs lowercase font-bold cursor-pointer" key={`css-badge-` + item}>
                <span>{state.css[`${desktop.mode}`][`${desktop.state}`][item]}</span>
                <span className='ml-1' onClick={() => updateCss('', item)}><FaMinusCircle /></span>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <span className="uppercase font-bold   my-2" style={{fontSize: '10px'}}>Style</span>
      <textarea value={state.style} rows={10} onChange={(e: any) => {
          
        updateValue(e.target.value, 'style')}} className="text-sm textarea border font-mono w-full h-1/6 bg-white shadow p-1" />
      <span className="uppercase font-bold   mt-2" style={{fontSize: '10px'}}>Semantic</span>
      <select value={state.semantic} className="w-full mr-4 select select-sm" onChange={(e: any) =>{   updateValue(e.target.value, 'semantic')}}>
        <option value=""></option>
        {semantics.map(semantic => (
          <option key={semantic} selected={state.semantic == semantic} value={semantic}>{semantic}</option>
        ))}
      </select>
    </div>
  )
}
export default BlockCss;