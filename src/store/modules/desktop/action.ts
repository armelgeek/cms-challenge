import { removeItem } from "../../magick/reducer";
import html2canvas from "html2canvas";
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
  console.log('desktop:', desktop.tabs);
   if(desktop.tabs.length > 0){
    desktop.tabs.forEach ( (tab:any,i:number) => {
      if ( tab.label === payload.label ){
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
  if ( !founded ){ 
  
     let tabs = [...desktop.tabs,payload];
     console.log('tabs',tabs);
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
        prop: 'currentTab',
        value: tabs.length-1
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
  } catch ( err ){
      console.log ( err )
  } 
}

export const addToUKit = (blockEditor:any) => async (dispatch: any, getState: any) => {

  let library = getState().desktop.library;
  console.log('page: ',library);
  let page = getState().editor.page;
  /**let screenshoot = '';
  (async (done) => {
    screenshoot =  await html2canvas(blockEditor,{ type: "dataURL" , useCORS: true , scale: 0.50 });
  })();**/
 // page.image = screenshoot;
  library.templates.forEach((template:any,index:number) => {
    if ( template.blocks_id === page.blocks_id ){
      library.templates.splice(index,1)
    }
  })
  library.templates.push(page)
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
}