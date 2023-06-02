import { all } from 'redux-saga/effects'
import * as userHandler from './users'
import * as mainHandler from './main'
import * as chatHandler from './chat'

export default function* root() {
  yield all([
    userHandler.userRegisterWatcher(),
    userHandler.userLoginWatcher(),
    userHandler.userLocationWatcher(),
    mainHandler.initWatcher(),
    chatHandler.sendMessageWatcher(),
    chatHandler.saveMessageWatcher(),
    chatHandler.initChatWatcher(),
    mainHandler.onlineUsersWatcher(),
    chatHandler.finishChatWatcher(),
    chatHandler.startCallWatcher(),
    chatHandler.finishCallWatcher(),
    chatHandler.activateChatWatcher()
  ])
}
