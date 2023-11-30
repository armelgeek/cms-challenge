import React, { useState, useCallback, useEffect, useRef, memo } from 'react'
import _ from 'lodash';
import classes from '../../../utils/scripts/tw.classes';
import { useDispatch, useGetter } from '../../../store';
import { flattenClasses, searchClass } from '../../../utils/tail/tw.classe';
import { FaMinusCircle } from 'react-icons/fa';
const classList = flattenClasses();
const ScrollItem = memo(({ selectTag, item, index }: any) => {
  return (
    <div className="suggestion-item" key={item.attr + '--' + index} onClick={() => {
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
    editor.current.cssObject[`${desktop.mode}`] = {
      ...editor.current.cssObject[`${desktop.mode}`],
      [attr]: classe
    };
    updateBlockStyle(editor.current.cssObject);

  }, [editor.current, desktop.mode])
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
    <div className="flex flex-col w-full h-full items-start p-2 bg-bluegray-200">
      <label className="font-bold">CSS</label>
      <div className="tag-input-sg-container mt-2  w-full">
        <input type="text" value={text} className="w-full  rounded-md  border-gray-200 focus:outline-0 focus:shadow-none focus:focus-within:ring-0 text-sm" placeholder='Search class' onChange={(e) => handleSearh(e.target.value)} />
        <div className="suggestions-container" ref={containerRef} style={{
          display: cls.length > 0 ? 'block' : 'none'
        }}>
          <ScrollableList items={cls} containerRef={containerRef} selectTag={selectTag} />
        </div>
        <div className="flex flex-row flex-wrap gap-2 py-2">
          {!_.isUndefined(state.css[`${desktop.mode}`]) && !_.isNull(state.css[`${desktop.mode}`]) && Object.keys(state.css[`${desktop.mode}`]).map((item) => {
            return state.css[`${desktop.mode}`][item] != '' ? (
              <div className="badge badge-primary cursor-pointer" key={`css-badge-` + item}>
                { }
                <span>{state.css[`${desktop.mode}`][item]}</span>
                <span className='ml-1' onClick={() => updateCss('', item)}><FaMinusCircle /></span>

              </div>
            ) : null;
          })}
        </div>
      </div>
      <label className="font-bold my-1">Style</label>
      <textarea value={state.style} onChange={(e: any) => updateValue(e.target.value, 'style')} className="text-sm font-mono w-full h-1/6 bg-white shadow p-1" />
      <label className="font-bold my-1">Semantic</label>
      <select value={state.semantic} className="w-full mr-4" onChange={(e: any) => updateValue(e.target.value, 'semantic')}>
        <option value=""></option>
        {semantics.map(semantic => (
          <option key={semantic} selected={state.semantic == semantic} value={semantic}>{semantic}</option>
        ))}
      </select>
    </div>
  )
}
export default BlockCss;