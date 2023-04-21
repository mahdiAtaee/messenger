import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './context/DarkModeContext'
import { ShowChatBoxProvider } from './context/ShowChatContext'
import { Provider } from 'react-redux'
import store from './Store'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <DarkModeProvider>
      <ShowChatBoxProvider>
        <App />
      </ShowChatBoxProvider>
    </DarkModeProvider>
  </Provider>
)
