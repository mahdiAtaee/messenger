import userAction from '../Actions/UsersAction'

const usersState = {}
const users = (state = usersState, action) => {
  let newState = state
  switch (action.type) {
    case userAction.USER_REGISTER_SUCCESS:
      break
    case userAction.USER_REGISTER_FAILED:
      break
    default:
      newState = state
      break
  }
  return newState
}
export default users
