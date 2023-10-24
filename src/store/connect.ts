import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modules from './modules'


const mapDispatchToProps = (actionCreators:any) => (dispatch:any) => ({
  actions: bindActionCreators(actionCreators, dispatch),
})

export default (mapStateToProps:any, mapActions:any) => {
  const mapActionToProps = {}
  for (const [moduleName, actions] of mapActions) {
    // @ts-ignore
    const moduleActions = modules[moduleName].action
    if (Array.isArray(actions)) {
      for (const action of actions) { // @ts-ignore
        mapActionToProps[action] = moduleActions[action]
      }
    } else {
      for (const [key, value] of Object.entries(actions)) {
        // @ts-ignore
        mapActionToProps[key] = moduleActions[value]
      }
    }
  }
  return connect(mapStateToProps, mapDispatchToProps(mapActionToProps))
}
