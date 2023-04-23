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
    yield call(() => {
      return localStorage.setItem('token', result.data.token)
    })
  } catch (error) {
    yield put({ type: UsersAction.USER_LOGIN_FAILED, payload: error.response.data })
  }
}
export const userLoginWatcher = function* () {
  yield takeLatest(UsersAction.USER_LOGIN, userLoginWorker)
}

// LOCATION
const userLocationWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('me/location', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })

    yield put({ type: UsersAction.USER_LOCATION_SUCCESS, payload: result.data })
  } catch (error) {
    yield put({ type: UsersAction.USER_LOCATION_FAILED, payload: error })
  }
}
export const userLocationWatcher = function* () {
  yield takeLatest(UsersAction.USER_LOCATION_REQUESTED, userLocationWorker)
}
