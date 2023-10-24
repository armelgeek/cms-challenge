import { removeItem } from "../../magick/reducer";

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