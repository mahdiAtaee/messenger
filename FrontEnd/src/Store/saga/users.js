import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import UsersAction from '../Actions/UsersAction'
import HttpService from '../../Services/HttpService'
const httpService = new HttpService()

// Register
const userRegisterWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post('auth/register', action.payload)
    })
    console.log(result)
    yield put({ type: UsersAction.USER_REGISTER_SUCCESS, payload: result.data })
  } catch (error) {
    yield put({ type: UsersAction.USER_REGISTER_FAILED, payload: error })
  }
}
export const userRegisterWatcher = function* () {
  yield takeLatest(UsersAction.USER_REGISTER, userRegisterWorker)
}

// Login
const userLoginWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post('auth/login', action.payload)
    })
    yield put({ type: UsersAction.USER_LOGIN_SUCCESS, payload: result.data })
  } catch (error) {
    yield put({ type: UsersAction.USER_LOGIN_FAILED, payload: error.response.data })
  }
}
export const userLoginWatcher = function* () {
  yield takeLatest(UsersAction.USER_LOGIN, userLoginWorker)
}
