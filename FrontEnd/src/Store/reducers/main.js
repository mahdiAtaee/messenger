import MainAction from '../Actions/MainAction'
import UsersAction from '../Actions/UsersAction'

const mainState = {
  AuthSuccess: null,
  AuthMessage: null,
  isInit: true,
  isUserLoggedIn: false,
  me: null,
  onlineUsers: [],
  recentChats: []
}

const main = (state = mainState, action) => {
  let newState = state
  switch (action.type) {
    case UsersAction.USER_REGISTER_SUCCESS:
      newState = { ...state, ...action.payload }
      break
    case UsersAction.USER_REGISTER_FAILED:
      break
    case UsersAction.USER_LOGIN_SUCCESS:
      newState = {
        ...state,
        AuthSuccess: action.payload.success,
        AuthMessage: action.payload.message,
        isUserLoggedIn: true
      }
      break
    case UsersAction.USER_LOGIN_FAILED:
      newState = { ...state, ...action.payload, isUserLoggedIn: false }
      break
    case MainAction.INIT_SUCCESS:
      newState = {
        ...state,
        isInit: false,
        me: action.payload.me,
        isUserLoggedIn: true,
        recentChats: action.payload.userRecentChat
      }
      break
    case MainAction.INIT_FAILED:
      newState = { ...state, ...action.payload, isInit: true, isUserLoggedIn: false }
      break
    case MainAction.UPDATE_ONLINE_USER_SUCCESS:
      newState = { ...state, onlineUsers: action.payload.onlineUsers }
      break
    case MainAction.UPDATE_ONLINE_USER_FAILED:
      newState = { ...state, onlineUsers: null }
      break
    default:
      newState = state
      break
  }
  return newState
}
export default main
