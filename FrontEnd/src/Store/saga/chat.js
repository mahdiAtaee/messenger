import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import ChatActions from '../Actions/ChatAction'
import HttpService from '../../Services/HttpService'
const httpService = new HttpService()

const saveMessageWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('chat/message', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    yield put({ type: ChatActions.SAVE_MESSAGE_SUCCESS, payload: action.payload })
  } catch (error) {
    yield put({ type: ChatActions.SAVE_MESSAGE_FAILED, payload: {} })
  }
}

export const saveMessageWatcher = function* () {
  yield takeLatest(ChatActions.SAVE_MESSAGE_INIT, saveMessageWorker)
}

const sendMessageWorker = function* (action) {
  try {
    yield put({ type: ChatActions.SEND_MESSAGE_SUCCESS, payload: action.payload })
  } catch (error) {
    yield put({ type: ChatActions.SEND_MESSAGE_FAILED, payload: {} })
  }
}

export const sendMessageWatcher = function* () {
  yield takeLatest(ChatActions.SEND_MESSAGE_INIT, sendMessageWorker)
}

const initChatWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('chat', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    const { id, participants } = result.data.chat
    yield put({ type: ChatActions.NEW_CHAT_SUCCESS, payload: { id, participants, Message: [] } })
  } catch (error) {
    yield put({ type: ChatActions.NEW_CHAT_FAILED, payload: {} })
  }
}

export const initChatWatcher = function* () {
  yield takeLatest(ChatActions.NEW_CHAT_INIT, initChatWorker)
}

const finishChatWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('chat/finish', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    yield put({ type: ChatActions.FINISH_CHAT_SUCCESS, payload: {} })
  } catch (error) {
    yield put({ type: ChatActions.FINISH_CHAT_FAILED, payload: {} })
  }
}

export const finishChatWatcher = function* () {
  yield takeLatest(ChatActions.FINISH_CHAT_INIT, finishChatWorker)
}

const finishCallWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('call/finish', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    yield put({ type: ChatActions.FINISH_CALL_SUCCESS, payload: {} })
  } catch (error) {
    yield put({ type: ChatActions.FINISH_CALL_FAILED, payload: {} })
  }
}

export const finishCallWatcher = function* () {
  yield takeLatest(ChatActions.FINISH_CALL_INIT, finishCallWorker)
}

const startCallWorker = function* (action) {
  try {
    yield put({ type: ChatActions.START_CALL_SUCCESS, payload: action.payload })
  } catch (error) {
    yield put({ type: ChatActions.START_CALL_FAILED })
  }
}

export const startCallWatcher = function* () {
  yield takeLatest(ChatActions.START_CALL_INIT, startCallWorker)
}

const activateChatWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('chat/recent', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    console.log('in activateChatWorker', result.data)
    if (result.data.success) { 
      yield put({ type: ChatActions.ACTIVATE_RECENT_CHAT_SUCCESS, payload: result.data })
    }
  } catch (error) {
    console.log(error)
    yield put({ type: ChatActions.ACTIVATE_RECENT_CHAT_FAILED })
  }
}

export const activateChatWatcher = function* () {
  yield takeLatest(ChatActions.ACTIVATE_RECENT_CHAT_INIT, activateChatWorker)
}
