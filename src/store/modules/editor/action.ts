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
  page.name = 'Untitled Page'
  dispatch({
    type: 'editor__add__item_to_prop',
    payload:{
      prop:'pages',
      value: page
    }
  })
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

export const setCurrentIconTab = (icon: string) => async (dispatch: any, getState: any) => {
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'iconTab',
      value: icon
    },
  })
}
export const showSidebar = (tab: string) => async (dispatch: any, getState: any) => {
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
function updateBlockContainer(blocks: any, currentId: any, modified: any) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      block.css.container = modified
    }
    if (block.blocks && block.blocks.length > 0) {
      updateBlockContainer(block.blocks, currentId, modified);
    }
  });
}
export const setFlexRow = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  let modified = current.css.container;
  modified = current.css.container.replace('flex-col', '').replace('flex-row', '')
  if (!modified.includes('flex-row')) {
    modified += ' flex-row';
  }
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.css.container': modified
    }
  })
  updateBlockContainer(editor.document.blocks, current.id, modified);
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
  modified = current.css.container.replace('flex-row', '').replace('flex-col', '')
  if (!modified.includes('flex-col')) {
    modified += ' flex-col';
  }
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.css.container': modified
    }
  })
  updateBlockContainer(editor.document.blocks, current.id, modified);
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': editor.document.blocks
    }
  })
}

function filterBlocksRecursive(blocks: any, currentId: any) {
  return blocks.filter((block: any) => {
    if (block.id === currentId) {
      return false;
    }

    if (block.blocks && block.blocks.length > 0) {
      block.blocks = filterBlocksRecursive(block.blocks, currentId);
    }

    return true;
  });
}

export const deleteBlock = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  let filteredBlocks = filterBlocksRecursive(editor.document.blocks, current.id);
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': filteredBlocks
    }
  })
}


function updateStyles(blocks: any, currentId: any, css: any, obj: any) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      block.css.css = css;
      block.cssObject = obj;
    }
    if (block.blocks && block.blocks.length > 0) {
      updateStyles(block.blocks, currentId, css, obj);
    }
  });
}
export const updateBlockStyle = (obj: any) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  let css = '';
  let keys = Object.keys(obj);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
  
    if (key !== 'base' && obj[key] != null) {
      const values = Object.values(obj[key]);
      const prefixedValues = values.map(value => `${key}:${value}`);
      css += ` ${prefixedValues.join(' ')}`;
    } else if (key === 'base' && obj[key] != null) {
      css += ` ${Object.values(obj[key]).join(' ')}`
    }
  }
  css = [...new Set(css.split(' '))].join(' ')

  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.cssObject': obj,
      'current.css.css': css
    }
  })
  updateStyles(editor.document.blocks, current.id, css, obj);
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': editor.document.blocks
    }
  })
}