import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import UsersAction from '../Actions/UsersAction'
import HttpService from '../../Services/HttpService'
const httpService = new HttpService()
const userRegisterWorker = function* (action) {
  try {
    const result = yield call(() => {
      httpService.post('auth/register', action.payload)
      // .then(response => response.data)
    })
    console.log(result.data)
  } catch (error) {}
}
export const userRegisterWatcher = function* () {
  yield takeLatest(UsersAction.USER_REGISTER, userRegisterWorker)
}
