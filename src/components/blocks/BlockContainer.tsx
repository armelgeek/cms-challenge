import React, { useEffect, useRef, useState } from "react";
import _ from 'lodash';
import BlockElement from "./BlockElement";
import { useDispatch, useGetter } from "../../store";
import BlockIFrame from "./components/BlockIFrame";

const BlockContainer = ({ doc, level, setCurrent, ajustCoords }: any) => {

  const refContainer = useRef(null);
  const [isEnter, setIsEnter] = useState(false);
  const editor = useGetter('editor', 'data', []);
  const desktop = useGetter('desktop', 'data', []);
  const editBlockContent = useDispatch('editor', 'editBlockContent');
  const toggleSelectedBlock = useDispatch('editor', 'toggleSelectedBlock');
  const resetSelectedBlock = useDispatch('editor', 'resetSelectedBlock');
  const editableProps = {
    contentEditable: true,
    onBlur: (e: any) => {

      editBlockContent(e.currentTarget.textContent);
    }
  }
  const classes = () => {
    let css = '';
    css = doc.css && Object.values(doc.css).join(" ");
    css += " windflow-level-" + level;
    return css;
  };
  const toggleBorder = () => {
    const isSelected = editor.selectedBlocks && editor.selectedBlocks.some((block:any) => block.id === doc.id);
    if (isEnter && editor.current && editor.current.id === doc.id) {
      return isSelected ? 'border-2 border-dashed border-red-500' : desktop.state === 'neutral' ? 'border-2 border-dashed border-blue-500' : 'border-2 border-dashed border-green-500';
    } else if (editor.current && editor.current.id === doc.id) {
      return isSelected ? 'border-2 border-dashed border-red-500' : desktop.state === 'neutral' ? 'border-2 border-dashed border-blue-500' : 'border-2 border-dashed border-green-500';
    } else {
      return isSelected ? 'border-2 border-dashed border-red-500' : 'border-none border-dashed border-transparent';
    }
  };
  console.log('tootle element',editor.selectedBlocks);
  const getStyle = (block: any) => {

    let stl = {} as any;
    if (!_.isUndefined(block.style) && block.style !== '') {
      stl = block.style.split(';').reduce((acc: any, rule: any) => {
        const [property, value] = rule.split(':');
        if (property && value) {
          acc[property.trim()] = value.trim();
        }
        return acc;
      }, {});
    }
    if (block.font !== '') {
      stl['fontFamily'] = block.font;
    }

    if (block.background && block.background.url !== '') {
      stl['backgroundImage'] = `url(${block.background.url})`;
    }
    return stl;
  };
  const props = {
    key: doc.id,
    ref: refContainer,
    style: getStyle(doc),
    id: doc.id,
    onMouseEnter: (e: any) => {
      e.stopPropagation();
      console.log('on hover');
      setIsEnter(true)
    },
    onMouseLeave: (e: any) => {
      e.stopPropagation();
      setIsEnter(false)
    },
    onClick: (e: any) => {
      e.stopPropagation();
      setCurrent(doc, refContainer.current?.offsetWidth)
      if (e.ctrlKey) {
        toggleSelectedBlock(doc);
      } else {
        resetSelectedBlock();
      }
    },
    className: `${classes()} ${toggleBorder()}`
  }
  const render = () => (
    <>
      {typeof doc.blocks != "undefined" && doc.blocks.length > 0 ? null : (doc.content ? doc.content : doc.element)}
      {typeof doc.blocks != "undefined" && doc.blocks.map((block: any) => {
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
                state={desktop.state}
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
  useEffect(() => {
    if (refContainer.current != null) {
      ajustCoords(doc, refContainer.current.offsetWidth);
    }
  }, [doc, refContainer.current])
  switch (doc.element) {

    case "article":
      return <article  {...props} >{render()}</article>;
    case "aside":
      return <aside  {...props}>{render()}</aside>;
    case "header":
      return <header  {...props}>{render()}</header>;
    case "figcaption":
      return <figcaption  {...props}>{render()}</figcaption>;
    case "figure":
      return <figure  {...props}>{render()}</figure>;

    case "label":
      return <label  {...props}>{render()}</label>;
    case "mark":
      return <mark  {...props}>{render()}</mark>;
    case "section":
      return <section  {...props}>{render()}</section>;
    case "summary":
      return <summary  {...props}>{render()}</summary>;
    case "time":
      return <time  {...props}>{render()}</time>;
    case "details":
      return <details  {...props}>{render()}</details>;
    case "main":
      return <main  {...props}>{render()}</main>;
    case "footer":
      return <footer  {...props}>{render()}</footer>;
    case "form":
      return <form  {...props}>{render()}</form>;
    case 'nav':
      return <nav {...props}>{render()}</nav>;
    case 'span':
      return <span {...props}>{render()}</span>;
    case 'div':
      return <div {...props}>{render()}</div>;
    case 'ul':
      return <ul {...props}>{render()}</ul>;
    case 'li':
      return <li {...props}>{render()}</li>;
    case 'ol':
      return <ol {...props}>{render()}</ol>;
    case "select":
      return <select {...props}>{render()}</select>;
    case 'table':
      return <table {...props}>{render()}</table>;
    case 'thead':
      return <thead {...props}>{render()}</thead>;
    case 'tbody':
      return <tbody {...props}>{render()}</tbody>;
    case 'th':
      return <th {...props}>{render()}</th>;
    case 'tr':
      return <tr {...props}>{render()}</tr>;
    case 'td':
      return <td {...props}>{render()}</td>;
    default:
      return <div {...props}>{render()}</div>;
  }
};
export default BlockContainer;
