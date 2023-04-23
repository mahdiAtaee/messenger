import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'
import MainAction from '../Actions/MainAction'
import HttpService from '../../Services/HttpService'
const httpService = new HttpService()


const initWorker = function* (action) {
  try {
    const result = yield call(() => {
      const token = localStorage.getItem('token')
      return httpService.post('/init', action.payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    })
    yield put({ type: MainAction.INIT_SUCCESS, payload: result.data })
  } catch (error) {
    yield put({ type: MainAction.INIT_FAILED, payload: error.response.data })
  }
}


export const initWatcher = function* () {
  yield takeLatest(MainAction.INIT_REQUESTED, initWorker)
}
