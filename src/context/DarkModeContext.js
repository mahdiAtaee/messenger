import React,{ createContext, useContext, useReducer } from 'react'

export const actionTypes = {
  DARK_MODE: 'DARK_MODE',
  LIGHT_MODE: 'LIGHT_MODE'
}

const initialState = {
  dark: false,
  light: true
}

const DarkModeContext = React.createContext()
const DarkModeDispatcher = React.createContext()

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DARK_MODE:
      return {
        ...state,
        dark: true,
        light: false
      }
    case actionTypes.LIGHT_MODE:
    default:
      return {
        ...state,
        dark: false,
        light: true
      }
  }
}

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('must use Dark Mode Provider before call useDarkModeContext context!!')
  }
  return context
}

export const useDarkModeDispatch = () => {
  const context = useContext(DarkModeDispatcher)
  if (!context) {
    throw new Error('must use Dark Mode Provider before call useDarkModeDispatch context!!')
  }
  return context
}

export function DarkModeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
      <DarkModeContext.Provider value={state}>
        <DarkModeDispatcher.Provider value={dispatch}>{children}</DarkModeDispatcher.Provider>
      </DarkModeContext.Provider>
  )
}
