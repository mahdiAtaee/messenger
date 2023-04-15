import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'
import makeSagaMiddleware from 'redux-saga'
import sagaApi from './saga'
const sagaMiddleware = makeSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagaApi)

export default store
