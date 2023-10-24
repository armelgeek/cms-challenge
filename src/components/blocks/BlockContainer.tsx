import React, { useEffect, useState } from "react";
import BlockElement from "./BlockElement";
import { useDispatch, useGetter } from "../../store";

const BlockContainer = ({ doc, level }: any) => {
  const [state, setState] = useState({
    current: null,
    floatingID: null,
    block: null,
    elementLink: false,
  }) as any;
  const editor = useGetter('editor', 'data', []);
  const setInfo = useDispatch('editor', 'setInfo');
  const classe = () => {
    let css = '';
     css = doc.css && Object.values(doc.css).join(" ");
  //  css += " " + doc.css.container;
    css += " z-" + level;
    doc.tag === "document" ? (css += " p-2") : null;
    css = css.replace('modal', '')
    return css;
  };
  const stile = () => {
    let st = ''
    if (state?.block?.image && state?.block?.image?.url) {
      st += "background-image:url(" + state?.block?.image?.url + ");"
    }
    state?.block?.font ? st += `font-family:"${state?.block?.font.replace('+', ' ')}";` : null
    return st + doc.style;
  };
  const selector = () => {
    let cls = "z-" + level;
    if (editor.current && editor.current.id === doc.id) {
      doc.tag === 'document' ?
        cls += 'right-0 border-2 border-primary-500' :
        cls += ' right-0 border border-red-400'
    } else {
      doc.tag === 'document' ?
        cls += 'right-0   border-2 border-transparent shadow ' :
        cls += '  right-0  border border-dashed border-transparent hover:border-red-400'
    }

    return cls.replace("md:hidden", "");
  };
  const classeElement = (block: any) => {
    let cl = block.css.css.replace('hidden', '')
    cl.replace('modal', '')
    return document
  }

  const component = (block: any) => {
    if (!block) return null
    return block.hasOwnProperty('level') ? 'h' + block.level : block.element
  }
  const setCurrent = (block: any) => {
    editor.current && editor.current.id === block.id ?
      setInfo({
        prop: 'current',
        value: null
      }) : setInfo({
        prop: 'current',
        value: block
      })
    /**editor.current && !editor.current.image ?
         this.editor.current.image = { url: this.editor.current.image } : null
 **/
  }
  const setFloating = (element: any) => {
    console.log('element => ', element)
    setState((state: any) => state.floatingID = element.id);
    let floating: any = document.querySelector('.block-floating')
    floating.style.left = element.coords.x
    floating.style.top = element.coords.y
  }
  const float = () => {
    setState((state: any) => {
      return {
        ...state,
        floatingID:doc.id
      }
    });
  }
  const nofloat = () => {
    setState((state: any) => {
       return {
         ...state,
         floatingID:null
       }
    });
  }
  const floating = () => {
    return editor.current ?
      editor.current.id == doc.id ? 'opacity-100' :
        state.floatingID === doc.id ? 'opacity-0' : 'opacity-0' : 'opacity-0'
  }
  useEffect(()=> {
      if(editor.current && editor.current.id == doc.id){
        console.log('it works',editor);
       /** updateBlockInfo({
          id: doc.id,
          style: editor.current.css
        })**/
      }
  },[editor,doc])
  return (
    <div
    //style={stile()}
      className={`${classe()} relative cursor-pointer border-2   border-gray-600 p-1 `} >
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
                    level={parseInt(level) + 1}
                />
              </React.Fragment>
          )
        }
        {
          if (block && block.type != 'slider' && block.type != 'container' && block.tag != 'iconify' && block.tag != 'container') {
            return (
                <BlockElement element={block} key={'block_element_'+block.id} level={parseInt(level) + 1} selected={setFloating} />
            )
          }
        }

      })}
      <div
          className={`${selector()} block-selector text-xs text-white bg-primary-400 absolute  -top-3`}
          onClick={() => setCurrent(doc)}
          onMouseLeave={nofloat}
          onMouseEnter={float}
          data-block-tag={doc.semantic || doc.tag}
      > {doc.semantic || doc.tag}</div>
    </div>
  );
};
export default BlockContainer;
