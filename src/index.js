import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { DarkModeProvider } from './context/DarkModeContext'
import { BrowserRouter as Router} from 'react-router-dom'
// import ContactPage from './FrontEnd/pages/ContactPage'
// import SettingsPage from './FrontEnd/pages/SettingsPage'
// import GroupPage from './FrontEnd/pages/GroupPage'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <ContactPage />
//   },
//   {
//     path: '/settings',
//     element: <SettingsPage />
//   },
//   {
//     path: '/friends',
//     element: <GroupPage />
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
)
