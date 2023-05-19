import React,{ createContext, useContext, useReducer } from 'react'

export const actionTypes = {
  SHOW_MAP: 'SHOW_MAP',
  SHOW_USERS_LIST: 'SHOW_USERS_LIST'
}

const initialState = {
  isShowMap: false
}

const ShowMapContext = React.createContext()
const ShowMapDispatcher = React.createContext()

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MAP:
      return {
        ...state,
        isShowMap: true
      }
    case actionTypes.SHOW_USERS_LIST:
    default:
      return {
        ...state,
        isShowMap: false
      }
  }
}

export const useShowMapContext = () => {
  const context = useContext(ShowMapContext)
  if (!context) {
    throw new Error('must use show map Provider before call useShowMapContext context!!')
  }
  return context
}

export const useShowMapDispatch = () => {
  const context = useContext(ShowMapDispatcher)
  if (!context) {
    throw new Error('must use show map Provider before call useShowMapDispatch context!!')
  }
  return context
}

export function ShowMapProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <ShowMapContext.Provider value={state}>
        <ShowMapDispatcher.Provider value={dispatch}>{children}</ShowMapDispatcher.Provider>
      </ShowMapContext.Provider>
  )
}
