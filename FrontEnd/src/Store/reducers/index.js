import { combineReducers } from 'redux'

import users from './users'
import main from './main'
import chat from './chat'

export default combineReducers({
  users,
  main,
  chat
})
