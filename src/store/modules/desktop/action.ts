import _ from 'lodash';
import { jsonToHTML } from "../../../utils/tail/jsontohtml";
import { removeItem } from "../../magick/reducer";
import html2canvas from "html2canvas";
import sdk from "../../../utils/api-sdk";
export const TYPES = {} as any;
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `desktop__${key}`;
}
export const removeTab = (tab: number) => async (dispatch: any, getState: any) => {
  const { desktop } = getState()
  let tabs = removeItem(desktop.tabs, tab);
  dispatch({
    type: 'desktop__item__info',
    payload: {
      prop: 'tabs',
      value: tabs
    },
  })
}
export const resetTab = () => async (dispatch: any, getState: any) => {

  dispatch({
    type: 'desktop__item__info',
    payload: {
      prop: 'currentTab',
      value: -1
    },
  })
}
export const openDialog = (dialog: any) => async (dispatch: any, getState: any) => {
  let founded = false
  const { desktop } = getState()
  if (desktop.tabs.length) {
    desktop.tabs.forEach((tab: any, i: number) => {
      if (tab.label === dialog.label) {
        console.log(tab.label, dialog.label)
        dispatch({
          type: 'desktop__item__info',
          payload: {
            prop: 'currentTab',
            value: i
          },
        })
        founded = true
      }
    });
  }
}
export const addTab = (payload: any) => async (dispatch: any, getState: any) => {

  let founded = false
  const { desktop } = getState()

  if (desktop.tabs.length > 0) {
    desktop.tabs.forEach((tab: any, i: number) => {
      if (tab.label === payload.label) {
        dispatch({
          type: 'desktop__item__info',
          payload: {
            prop: 'currentTab',
            value: i
          },
        })
        founded = true
        return
      }
    })
  }
  if (!founded) {

    let tabs = [...desktop.tabs, payload];
    console.log('tabs', tabs);
    dispatch({
      type: 'desktop__item__info',
      payload: {
        prop: 'tabs',
        value: tabs
      },
    })
    dispatch({
      type: 'desktop__item__info',
      payload: {
        prop: 'pages',
        value: [...desktop.pages, payload]
      },
    })
    dispatch({
      type: 'desktop__item__info',
      payload: {
        prop: 'currentTab',
        value: tabs.length - 1
      },
    })
  }
}

export const loadUIKit = (kit: any) => async (dispatch: any, getState: any) => {
  try {
    let uk = getState().desktop.uikits;
    let founded = false
    uk.forEach((uikit: any, i: number) => {
      if (uikit.name === kit.name) {
        founded = true
        return
      }
    })
    if (!founded) {
      uk.push(kit.json)
    }
    dispatch({
      type: 'desktop__item__info',
      payload: {
        prop: 'uikits',
        value: uk
      },
    })
    dispatch({
      type: 'desktop__item__infos',
      payload: {
        'library': kit.json
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const takeScreenShot = async (node: any) => {
  if (!node) {
    throw new Error('You should provide correct html node.')
  }
  return html2canvas(node)
    .then((canvas) => {
      const croppedCanvas: any = document.createElement('canvas')
      const croppedCanvasContext: any = croppedCanvas.getContext('2d')
      // init data
      const cropPositionTop = 0
      const cropPositionLeft = 0
      const cropWidth = canvas.width
      const cropHeight = canvas.height

      croppedCanvas.width = cropWidth
      croppedCanvas.height = cropHeight

      croppedCanvasContext.drawImage(
        canvas,
        cropPositionLeft,
        cropPositionTop,
      )

      const base64Image = croppedCanvas.toDataURL()
      return base64Image
    })
    .catch((e) => console.log('Error', e))
}

export const addToUKit = () => async (dispatch: any, getState: any) => {

  let library = getState().desktop.library;
  let page = getState().editor.page;
  let current = getState().editor.current;
  let previewFrame = document.querySelector("#preview-frame");
  if (previewFrame) {
    let el = previewFrame?.contentWindow.document.querySelector('#' + current.id) as any;

    if (!el) return null;
    try {
        let img = await takeScreenShot(el);
        page.name = library.name;
        page.description = library.description;
        page.category = 'uikit';
        let kit = {
          name: page.name,
          image: img || null,
          description: page.description,
          categoryId: library.id,
          templates: JSON.stringify(page)
        };
      let requestObj = sdk.addToUiKit(kit).promise;
      requestObj
        .then((response: any) => {
          dispatch({
            type: 'editor__item__info',
            payload: {
              prop: 'current',
              value: null
            }
          })
          dispatch({
            type: 'desktop__item__info',
            payload: {
              prop: 'library',
              value: library
            }
          })
        })


    } catch (e) {
      console.log('Error [add to kit]:', e);
    }

  }

}

export const exportBuild = () => async (dispatch: any, getState: any) => {
  let editor = getState().desktop;
  let pages = editor.pages
  let shw = '';
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].type == 'editor') {
      shw += `---------------start ${pages[i].label}.html---------------\n`;
      shw += jsonToHTML(pages[i].object.json.blocks);
      shw += `\n`;
      shw += `---------------end ${pages[i].label}.html---------------\n`;
    }
  }
  console.log('export build', shw);

}
export const fetchUIKit = () => async (dispatch: any, getState: any) => {

  let requestObj = sdk.fetchUIKit().promise;
  requestObj
    .then((response: any) => {
      console.log('response', response);
      dispatch({
        type: 'desktop__item__info',
        payload: {
          prop: 'uikits',
          value: response
        }
      })
    })

}