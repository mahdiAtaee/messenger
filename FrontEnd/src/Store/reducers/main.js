import MainAction from '../Actions/MainAction'

const mainState = {
  isInit: true
}

const main = (state = mainState, action) => {
  let newState = state
  switch (action.type) {
    case MainAction.INIT_SUCCESS:
      newState = { ...state, isInit: !action.payload.success }
      break
    case MainAction.INIT_FAILED:
      newState = { ...state, ...action.payload }
      break
    default:
      newState = state
      break
  }
  return newState
}
export default main
