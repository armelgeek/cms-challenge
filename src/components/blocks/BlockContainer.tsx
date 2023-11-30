import React, { useEffect, useRef, useState } from "react";
import BlockElement from "./BlockElement";
import { useDispatch, useGetter } from "../../store";
import BlockIFrame from "./components/BlockIFrame";

const BlockContainer = ({ doc, level,setCurrent,ajustCoords }: any) => {

  const refContainer = useRef(null);
  const [isEnter, setIsEnter] = useState(false);
  const editor = useGetter('editor', 'data', []);
  const editBlockContent = useDispatch('editor','editBlockContent');
  const editableProps = {
    contentEditable: true,
    onBlur: (e: any) => {
      editBlockContent(e.currentTarget.textContent);
    }
  }
  const classes = () => {
    let css = '';
    css = doc.css && Object.values(doc.css).join(" ");
    css += " z-" + level;
    return css;
  };
  const toggleBorder = () => {
    if (isEnter && (editor.current && editor.current.id == doc.id)) {
      return 'border-primary-500';
    } else {
      if (editor.current && editor.current.id == doc.id) {
        return 'border-primary-500';
      } else {
        return 'border-transparent';
      }
    }
  }
  const props =  {
    key:doc.id,
    ref:refContainer,
    onMouseEnter:(e:any) =>{
      e.stopPropagation();
      setIsEnter(true)
    },
    onMouseLeave:(e:any) =>{
        e.stopPropagation();
        setIsEnter(false)
    },
    onClick:(e:any) => {
    e.stopPropagation();
    setCurrent(doc,refContainer.current?.offsetWidth)
  },
  id: doc.id,
    className: `${classes()} relative cursor-pointer border ${toggleBorder()}`
  }
  const render = () => (
      <>
        {typeof doc.blocks!= "undefined" && doc.blocks.length > 0 ? null : (doc.content ? doc.content:  doc.element)}
        {typeof doc.blocks!= "undefined" &&  doc.blocks.map((block: any) => {
          if (
              block.type === "container" ||
              block.tag === "container" ||
              block.tag === "blocks"
          ) {
            return (
                <React.Fragment key={block.id}>
                  <BlockContainer
                      doc={block}
                      key={block.id}
                      setCurrent={setCurrent}
                      level={parseInt(level) + 1}
                      ajustCoords={ajustCoords}
                  />
                </React.Fragment>
            )
          }
          {
            if (block && block.type != 'container' && block.tag != 'container') {
              return (
                  <BlockElement
                      element={block}
                      key={'block_element_' + block.id}
                      level={parseInt(level) + 1}
                      setCurrent={setCurrent}
                      ajustCoords={ajustCoords}
                  />
              )
            }
          }
          if (block.tag === 'iframe' || block.tag === 'youtube' || block.tag === 'vimeo') {
            return (
                <BlockIFrame
                    element={block}
                    key={'block_element_' + block.id}
                    setCurrent={setCurrent}
                    level={parseInt(level) + 1}
                />)
          }
        })}
      </>
  )
  useEffect(()=>{
    if(refContainer.current!=null){
      ajustCoords(doc,refContainer.current.offsetWidth);
    }
  },[doc, refContainer.current])
  switch (doc.element) {
    case 'div':
      return <div {...props}>{render()}</div>;
    case 'ul':
      return <ul {...props}>{render()}</ul>;
    case 'li':
      return <li {...props} {...editableProps}>{render()}</li>;
    case 'ol':
    return <ol {...props} {...editableProps}>{render()}</ol>;
    default:
      return <div {...props} {...editableProps}>{render()}</div>;
  }
};
export default BlockContainer;
