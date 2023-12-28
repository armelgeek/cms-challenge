import React, { useEffect, useRef, useState } from "react";
import BlockElement from "./BlockElement";
import { useDispatch, useGetter } from "../../store";
import BlockIFrame from "./components/BlockIFrame";

const BlockContainer = ({ doc, level, setCurrent, ajustCoords }: any) => {

  const refContainer = useRef(null);
  const [isEnter, setIsEnter] = useState(false);
  const editor = useGetter('editor', 'data', []);
  const desktop = useGetter('desktop', 'data', []);
  const editBlockContent = useDispatch('editor', 'editBlockContent');
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
    if (isEnter && (editor.current && editor.current.id == doc.id)) {
      if (desktop.state == 'neutral') {
        return 'border-primary-500';
      } else {
        return 'border-green-500';
      }

    } else {
      if (editor.current && editor.current.id == doc.id) {
        if (desktop.state == 'neutral') {
          return 'border-primary-500';
        } else {
          return 'border-green-500';
        }
      } else {
        return 'border-transparent';
      }
    }
  }
  const props = {
    key: doc.id,
    ref: refContainer,
    onMouseEnter: (e: any) => {
      
      console.log('on hover');
      setIsEnter(true)
    },
    onMouseLeave: (e: any) => {
      
      setIsEnter(false)
    },
    onClick: (e: any) => {
      
      setCurrent(doc, refContainer.current?.offsetWidth)
    },
    id: doc.id,
    className: `${classes()} ${isEnter ? (desktop.state == 'neutral' ? 'bg-primary-100' : 'bg-green-100') : 'bg-white'} relative cursor-pointer border ${toggleBorder()}`
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
