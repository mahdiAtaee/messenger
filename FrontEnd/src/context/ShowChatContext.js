import React, { createContext, useContext, useReducer } from 'react'

export const actionTypes = {
  SHOW_CHAT_BOX: 'SHOW_CHAT_BOX',
  HIDE_CHAT_BOX: 'HIDE_CHAT_BOX'
}

const initialState = {
  showChatBox: false
}

const showChatBoxContext = React.createContext()
const showChatBoxDispatcher = React.createContext()

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_CHAT_BOX:
      return {
        showChatBox: true
      }
    case actionTypes.HIDE_CHAT_BOX:
    default:
      return {
        showChatBox: false
      }
  }
}

export const useShowChatBoxContext = () => {
  const context = useContext(showChatBoxContext)
  if (!context) {
    throw new Error('must use Dark Mode Provider before call useShowChatBoxContext context!!')
  }
  return context
}

export const useShowChatBoxDispatch = () => {
  const context = useContext(showChatBoxDispatcher)
  if (!context) {
    throw new Error('must use Dark Mode Provider before call useShowChatBoxDispatch context!!')
  }
  return context
}

export function ShowChatBoxProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <showChatBoxContext.Provider value={state}>
      <showChatBoxDispatcher.Provider value={dispatch}>{children}</showChatBoxDispatcher.Provider>
    </showChatBoxContext.Provider>
  )
}
