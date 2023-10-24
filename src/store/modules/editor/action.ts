import Block from "../../../utils/tail/blocks";
import Element from "../../../utils/tail/element";
import { addTab } from "../desktop/action";
import page from '../../../assets/pages/default.json'
import DOMPurify from "dompurify";
export const TYPES = {} as any;
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `editor__${key}`;
}
export const createEmptyBlock = () => async (dispatch: any, getState: any) => {
  let page = new Block() as any;
  const block = new Element().Flexbox({ direction: 'col' }).setIcon('dashboard').setTag('document')
  page.json.blocks = block
  page.name = 'A new component'
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'page',
      value: page
    },
  })
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'current',
      value: block
    },
  })
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'document',
      value: block
    },
  })
  dispatch(addTab({
    label: page.name,
    object: page,
    type: 'editor'
  }))
}

export const openDefaultBlock = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'page',
      value: page
    },
  })
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'document',
      value: page.json.blocks
    },
  })
  dispatch(addTab({
    label: page.name,
    object: page,
    type: 'editor'
  }))
}

export const setCurrentIconTab = (icon:string) => async (dispatch: any, getState: any) => {
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'iconTab',
      value: icon
    },
  })
}
export const showSidebar = (tab:string) => async (dispatch: any, getState: any) => {
  let sidebar = getState().editor.sidebar;
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'sidebar',
      value: {
        ...sidebar,
        show: true,
        name: tab
      }
    },
  })
}
export const closeSidebar = () => async (dispatch: any, getState: any) => {
  let sidebar = getState().editor.sidebar;
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'sidebar',
      value: {
        ...sidebar,
        show: false,
        name: ''
      }
    },
  })
}
export const setFlexRow = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  let modified = current.css.container;
  modified = current.css.container.replace ( 'flex-col','').replace('flex-row','')
  if(!modified.includes('flex-row')){
    modified += ' flex-row';
  }
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.css.container': modified
    }
  })
  editor.document.blocks.map((block:any) =>{
    if(block.id ===  current.id){
       block.css.container = modified
    }
  });
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': editor.document.blocks
    }
  })
}



export const setFlexCol = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  let modified = current.css.container;
  modified = current.css.container.replace ( 'flex-row','').replace('flex-col','')
  if(!modified.includes('flex-col')){
    modified += ' flex-col';
  }
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.css.container': modified
    }
  })
  editor.document.blocks.map((block:any) =>{
    if(block.id ===  current.id){
      block.css.container = modified
    }
  });
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': editor.document.blocks
    }
  })
}
