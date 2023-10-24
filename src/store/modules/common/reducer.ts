import { initSetting } from '../../../config/setting'
import { TYPES } from './action'
const setting = initSetting()
const initialState:any = {
  ...setting
}
const mutations = {
  [TYPES.updateSetting](state:any, setting:any) {
    return {
      ...state,
      setting: {
        ...state.setting,
        ...setting,
      },
    }
  },
  [TYPES.setTheme](state:any, id:number) {
    return {
      ...state,
      setting: {
        ...state.setting,
        themeId: id,
      },
    }
  },
}

export default (state = initialState, action:any) =>
  mutations[action.type]
    ? mutations[action.type](state, action.payload)
    : state
