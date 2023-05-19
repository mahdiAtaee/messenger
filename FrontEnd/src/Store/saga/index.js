import { all } from 'redux-saga/effects'
import * as userHandler from './users'
import * as mainHandler from './main'

export default function* root() {
  yield all([
    userHandler.userRegisterWatcher(),
    userHandler.userLoginWatcher(),
    userHandler.userLocationWatcher(),
    mainHandler.initWatcher(),
    mainHandler.onlineUsersWatcher()
  ])
}
