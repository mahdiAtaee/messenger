import { combineReducers } from 'redux'

import users from './users'
import main from './main'

export default combineReducers({
  users,
  main
})
