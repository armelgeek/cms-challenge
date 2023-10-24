import { getData, saveData } from '../../../plugins/storage.js'
import { storageDataPrefix } from '../../../config/index.js'
import { mergeSetting } from '../../../config/setting.js'
export const TYPES = {
  updateSetting: null,
  setTheme: null
} as any;
for (const key of Object.keys(TYPES)) {
  TYPES[key] = `common__${key}`
}

const settingKey = storageDataPrefix.setting


export const initSetting = () => async(dispatch:any, getState:any) => {
  const setting = await getData(settingKey)
  if (!setting) return
  await dispatch(updateSetting(mergeSetting(setting)))
}

export const updateSetting = (setting:any) => async(dispatch:any, getState:any) => {
  dispatch({
    type: TYPES.updateSetting,
    payload: setting,
  })
  const { common } = getState()
  await saveData(settingKey, common.setting)
}

export const setTheme =(id:any) => async(dispatch:any, getState:any) => {
  dispatch({
    type: TYPES.setTheme,
    payload: id,
  })
  const { common } = getState()
  await saveData(settingKey, common.setting)
}