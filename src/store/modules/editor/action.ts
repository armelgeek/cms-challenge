import Block from "../../../utils/tail/blocks";
import Element from "../../../utils/tail/element";
import { addTab } from "../desktop/action";
import page from '../../../assets/pages/default.json'
import DOMPurify from "dompurify";
import FileSaver from 'file-saver';
import jp from 'jsonpath'
import { randomID } from "../../../utils/tail/db";
import { Database } from "../../../utils/tail/database";
import { mergeCSSObjects } from "../../../utils/functions";
import { jsonToHTML } from "../../../utils/tail/jsontohtml";
let db = new Database();
export const TYPES = {} as any;
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `editor__${key}`;
}
export const createEmptyBlock = () => async (dispatch: any, getState: any) => {
  let page = new Block() as any;
  const block = new Element().Flexbox({ direction: 'col' }).setIcon('dashboard').setTag('document')
  page.json.blocks = block
  page.name = 'Untitled Page' + Math.random();
  dispatch({
    type: 'editor__add__item_to_prop',
    payload: {
      prop: 'pages',
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
      'current': null,
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
  if (current.tag == 'document') {
    editor.document.css.css = css;
    editor.document.cssObject = obj;
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document': editor.document
      }
    })
  } else {
    updateStyles(editor.document.blocks, current.id, css, obj);
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document.blocks': editor.document.blocks
      }
    })
  }


}



export const editBlockContent = (value: any) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.content': value
    }
  })
  if (current.tag == 'document') {
    editor.document.content = value;
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document': editor.document
      }
    })
  } else {
    updateBlockContent(editor.document.blocks, current.id, value);
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document.blocks': editor.document.blocks
      }
    })
  }
}
function updateBlockContent(blocks: any, currentId: any, modified: any) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      block.content = modified
    }
    if (block.blocks && block.blocks.length > 0) {
      updateBlockContent(block.blocks, currentId, modified);
    }
  });
}



export const editBlockLevel = (value: any) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.level': value * 1
    }
  })
  if (current.tag == 'document') {
    editor.document.level = value * 1;
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document': editor.document
      }
    })
  } else {
    updateBlockLevel(editor.document.blocks, current.id, value);
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document.blocks': editor.document.blocks
      }
    })
  }
}


function updateBlockLevel(blocks: any, currentId: any, modified: any) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      block.level = modified
    }
    if (block.blocks && block.blocks.length > 0) {
      updateBlockLevel(block.blocks, currentId, modified);
    }
  });
}



export const editBlockType = (value: any) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.type': value
    }
  })
  if (current.tag == 'document') {
    editor.document.type = value;
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document': editor.document
      }
    })
  } else {
    updateBlockType(editor.document.blocks, current.id, value);
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document.blocks': editor.document.blocks
      }
    })
  }
}


function updateBlockType(blocks: any, currentId: any, modified: any) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      block.type = modified
    }
    if (block.blocks && block.blocks.length > 0) {
      updateBlockType(block.blocks, currentId, modified);
    }
  });
}


export const editBlockImageUrl = (value: any) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.image.url': value
    }
  })
  if (current.tag == 'document') {
    editor.document.image.url = value;
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document': editor.document
      }
    })
  } else {
    updateBlockImageUrl(editor.document.blocks, current.id, value);
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document.blocks': editor.document.blocks
      }
    })
  }
}


function updateBlockImageUrl(blocks: any, currentId: any, modified: any) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      block.image.url = modified
    }
    if (block.blocks && block.blocks.length > 0) {
      updateBlockImageUrl(block.blocks, currentId, modified);
    }
  });
}

function modifyBlockProperty(blocks: any[], currentId: any, modified: any, property: string) {
  blocks.forEach((block: any) => {
    if (block.id === currentId) {
      let properties = property.split('.');
      let currentObject = block;

      for (let prop of properties.slice(0, -1)) {
        currentObject[prop] = currentObject[prop] || {};
        currentObject = currentObject[prop];
      }

      currentObject[properties[properties.length - 1]] = modified;
    }

    if (block.blocks && block.blocks.length > 0) {
      modifyBlockProperty(block.blocks, currentId, modified, property);
    }
  });
}



export const updateBlockProperty = (value: any, key: string) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  let attr = 'current.' + key;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      [attr]: value
    }
  })
  if (current.tag == 'document') {
    editor.document[key] = value;
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document': editor.document
      }
    })
  } else {
    modifyBlockProperty(editor.document.blocks, current.id, value, key);
    dispatch({
      type: 'editor__item__infos',
      payload: {
        'document.blocks': editor.document.blocks
      }
    })
  }
}
export const addPage = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  if (!editor.page) return
  editor.page.id = editor.page.blocks_id
  db.addPage(editor.page)
  db.getPages().then(res => console.log(res))
}
export const savePage = (payload: any) => async (dispatch: any, getState: any) => {
  if (!getState().editor.page) return
  let page = getState().editor.page;
  try {
    if (!page.id || !page.hasOwnProperty('id')) {
      page.id = randomID('page')
      const savedPage = new Promise((resolve, reject) => {
        db.addPage(page).then(res => {
          dispatch({
            type: 'editor__item__info',
            payload: {
              prop: 'page',
              value: page
            },
          });
        })
      })
      return savedPage
    } else {
      const savedPage = new Promise((resolve, reject) => {
        db.updatePage(page.id, page).then(res => {
          resolve(res)
        })
      })
      return savedPage
    }
  } catch (err) {
    console.log('It was not possible to save the page');
    console.log(err)
  }
}

export const getPages = (category: any, limit = 4, offset = 0) => {
  const pages = new Promise((resolve, reject) => {
    db.getPages(category, limit, offset).then(res => {
      resolve(res)
    })
  })
  return pages
}


export const deletePage = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let desktop = getState().desktop;
  if (!editor.page) return
  if (!editor.page) return
  desktop.tabs.splice(desktop.currentTab, 1)
  db.deletePage(editor.page.id)
}

export const addKitBlockInPage = (kit: any) => async (dispatch: any, getState: any) => {
  let importedBlock = kit.json.blocks;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current.blocks': [...getState().editor.current.blocks, ...importedBlock.blocks],
      'document.blocks': [...getState().editor.document.blocks, ...importedBlock.blocks]
    },
  })
}



export const editKitBlockInPage = (kit: any) => async (dispatch: any, getState: any) => {
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'page',
      value: kit
    },
  })
  dispatch({
    type: 'editor__item__info',
    payload: {
      prop: 'document',
      value: kit.json.blocks
    },
  })
  dispatch(addTab({
    label: kit.name,
    object: kit,
    type: 'editor'
  }))
}
function moveBlockAction(blocks: any, currentId: any, direction: any) {
  let targetIndex = -1;

  blocks.forEach((block: any, index: number) => {
    if (block.id === currentId) {
      targetIndex = index;
    }

    if (block.blocks && block.blocks.length > 0) {
      moveBlockAction(block.blocks, currentId, direction);
    }
  });

  if (targetIndex !== -1) {
    if (direction === "up" && targetIndex > 0) {
      const temp = blocks[targetIndex];
      blocks[targetIndex] = blocks[targetIndex - 1];
      blocks[targetIndex - 1] = temp;
    } else if (direction === "down" && targetIndex < blocks.length - 1) {
      const temp = blocks[targetIndex];
      blocks[targetIndex] = blocks[targetIndex + 1];
      blocks[targetIndex + 1] = temp;
    }
  }
}



export const moveBlock = (currentId: any, direction: any) => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  moveBlockAction(editor.document.blocks, currentId, direction);
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': editor.document.blocks
    }
  })

}

function duplicateBlockAction(blocks: any, currentId: any) {
  let duplicatedBlock: any;
  blocks.forEach((block: any, index: number) => {
    if (block.id === currentId) {
      duplicatedBlock = { ...block, id: 'tail-editor-' + Math.random().toString(36).substring(7) };
      blocks.splice(index + 1, 0, duplicatedBlock);
    }
    if (block.blocks && block.blocks.length > 0) {
      duplicateBlockAction(block.blocks, currentId);
    }
  });
  return { duplicatedBlock, blocks };
}

export const duplicateBlock = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  console.log('editor', editor);
  console.log('current', current);
  const { duplicatedBlock, blocks } = duplicateBlockAction(editor.document.blocks, current.id);

  dispatch({
    type: 'editor__item__infos',
    payload: {
      'document.blocks': blocks,
      'current': duplicatedBlock
    }
  })

}
function navigateToParentAction(blocks: any, currentId: any): any | null {
  for (const block of blocks) {
    const childBlock = findBlockById(block.blocks, currentId);
    if (childBlock) {
      return block;
    }
    if (block.blocks && block.blocks.length > 0) {
      const parentBlock = navigateToParentAction(block.blocks, currentId);
      if (parentBlock) {
        return parentBlock;
      }
    }
  }

  return null;
}

function findBlockById(blocks: any, currentId: any): any | null {
  for (const block of blocks) {
    if (block.id === currentId) {
      return block;
    }
    if (block.blocks && block.blocks.length > 0) {
      const childBlock = findBlockById(block.blocks, currentId);
      if (childBlock) {
        return childBlock;
      }
    }
  }
  return null;
}



export const navigateToParent = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let current = getState().editor.current;
  const elt = navigateToParentAction(editor.document.blocks, current.id);
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'current': elt
    }
  })

}
export const copyStyleBlock = () => async (dispatch: any, getState: any) => {
  let current = getState().editor.current;
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'copiedCssObject': current.cssObject
    }
  })
}
export const pasteStyleBlock = () => async (dispatch: any, getState: any) => {
  let current = getState().editor.current;
  let editor = getState().editor;
  let mergedBlockCss = mergeCSSObjects(editor.current.cssObject, editor.copiedCssObject);
  dispatch(updateBlockStyle(mergedBlockCss));
  dispatch({
    type: 'editor__item__infos',
    payload: {
      'copiedCssObject': null
    }
  })
}
export const importBlock = () => async (dispatch: any, getState: any) => {

}
function removeNestedObjectsKey(currentNode = {} as any, arrayKey: any = [], deleteKey = '') {
  delete currentNode[deleteKey]
  currentNode[arrayKey].forEach((obj: any) => {
    removeNestedObjectsKey(obj, arrayKey, deleteKey)
  })
  return currentNode

}
export const exportDocument = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  let page = editor.page;
  let pagePurge = new Block()
  pagePurge.json.blocks = editor.document
  pagePurge.purge()
  let json = {
    blocks: editor.document,
    build: pagePurge.json.build
  };
  page.json = json
  removeNestedObjectsKey(page.json.blocks, 'blocks', 'coords')
  removeNestedObjectsKey(page.json.blocks, 'blocks', 'tailwind')
  const data = JSON.stringify(page)
  const blob = new Blob([data], { type: 'application/json' })
  FileSaver.saveAs(blob, page.name);
}
export const exportBlock = () => async (dispatch: any, getState: any) => {
  let editor = getState().editor;
  if (!editor.current) return
  let block = editor.current
  const data = JSON.stringify(block)
  const blob = new Blob([data], { type: 'application/json' })
  FileSaver.saveAs(blob, 'windflow-block');
}
export const exportBuild = (html: any) => async (dispatch: any, getState: any) => {
 /** let editor = getState().editor;
  if (!html) return
  let page = editor.page
  let fonts = jp.query(page.json.blocks, '$..blocks..font')
  let fnts = [...new Set(fonts.filter(a => { return a }))]
  let anims = jp.query(page.json.blocks, '$..blocks[?(@.gsap.animation)]')
  let animations = anims.map(a => { return { id: a.id, gsap: a.gsap } })
  const whoobeone = {
    html: html,
    fonts: fnts,
    title: page.name,
    description: page.description,
    animations: animations,
    tags: page.tags.join(','),
    js: page.json.blocks.data.js,
    analytics: page.analytics || null
  }
  console.log(whoobeone)
  let data = "const whoobe = " + JSON.stringify(whoobeone) + ';export default whoobe'
  const blob = new Blob([data], { type: 'application/js' })
  FileSaver.saveAs(blob, 'whoobe.js')**/
}




export const getCurrentHTML = () => async (dispatch: any, getState: any) => {
  let current = getState().editor.current;
  let html = jsonToHTML(current);
  console.log(html);
  dispatch({
    type: 'desktop__item__infos',
    payload: {
      'html': html
    }
  })
}