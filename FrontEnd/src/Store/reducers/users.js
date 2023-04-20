import userAction from '../Actions/UsersAction'

const usersState = {
  success: null,
  message: null,
  isUserLoggedIn: false
}

const users = (state = usersState, action) => {
  let newState = state
  switch (action.type) {
    case userAction.USER_REGISTER_SUCCESS:
      newState = { ...usersState, ...action.payload }
      break
    case userAction.USER_REGISTER_FAILED:
      break
    case userAction.USER_LOGIN_SUCCESS:
      newState = { ...usersState, ...action.payload, isUserLoggedIn: true }
      break
    case userAction.USER_LOGIN_FAILED:
      newState = { ...usersState, ...action.payload, isUserLoggedIn: false }
      break
    default:
      newState = state
      break
  }
  return newState
}
export default users
