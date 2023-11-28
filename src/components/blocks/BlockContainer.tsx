import React, { useEffect, useRef, useState } from "react";
import BlockElement from "./BlockElement";
import { useDispatch, useGetter } from "../../store";
import BlockIFrame from "./components/BlockIFrame";

const BlockContainer = ({ doc, level,setCurrent,ajustCoords }: any) => {
  const [state, setState] = useState({
    current: null,
    floatingID: null,
    block: null,
    elementLink: false,
  }) as any;
  const refContainer = useRef(null);
  const [isEnter, setIsEnter] = useState(false);
  const editor = useGetter('editor', 'data', []);
  const setInfo = useDispatch('editor', 'setInfo');

  const classes = () => {
    let css = '';
    css = doc.css && Object.values(doc.css).join(" ");
    css += " z-" + level;
    doc.tag === "document" ? (css += " p-2") : null;
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
  useEffect(()=>{
    ajustCoords(doc,refContainer.current.offsetWidth);
  },[doc, refContainer.current])
  return (
    <div
      ref={refContainer}
      onMouseEnter={(e) =>{
        e.stopPropagation();
        setIsEnter(true)
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsEnter(false)
      }}
      onClick={(e) => {
        e.stopPropagation();
        setCurrent(doc,refContainer.current?.offsetWidth)
      }}
      id={doc.id}
      className={
        `${classes()} block-container relative cursor-pointer border ${toggleBorder()}`}>
      {doc.blocks.length ? null : doc.element}
      {doc.blocks.map((block: any) => {
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
      {/**<div className={!isEnter ? 'hidden' : ''}>
        {renderElement()}
    </div>**/}
    </div>
  );
};
export default BlockContainer;
