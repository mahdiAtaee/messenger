import 'bootstrap/dist/css/bootstrap.min.css'
import { useDarkModeContext } from './context/DarkModeContext'

import SettingsPage from './components/pages/SettingsPage'
import ContactPage from './components/pages/ContactPage'
import GroupPage from './components/pages/GroupPage'
import NotFoundPage from './components/Partials/NotFoundPage'
import Login from './Auth/Login'
import Register from './Auth/Register'

import LocationService from './Services/LocationService'
import MessageService from './Services/MessageService'

import MainLayout from './components/Layout'
import AuthLayout from './Auth/Layout'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

function App() {
  const { dark } = useDarkModeContext()
  const messageService = new MessageService()
  const loggedIn = false
  return (
    <div className={dark ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Switch>
          <Route path="/messenger/:path?" exact>
            <MainLayout>
              <Switch>
                <Route path="/messenger/group">
                  <GroupPage />
                </Route>
                <Route path="/messenger/chat">
                  <ContactPage />
                </Route>
                <Route path="/messenger/settings">
                  <SettingsPage />
                </Route>
                <Route path="/messenger" exact>
                  <NotFoundPage />
                </Route>
                <Route path="/messenger/*" exact>
                  <NotFoundPage />
                </Route>
              </Switch>
            </MainLayout>
          </Route>
          <Route path="/auth/:path?" exact>
            <Switch>
              <Route path="/auth/login">
                <Login />
              </Route>
              <Route path="/auth/register">
                <Register />
              </Route>
              <Route path="/auth" exact>
                <NotFoundPage />
              </Route>
              <Route path="/auth/*" exact>
                <NotFoundPage />
              </Route>
            </Switch>
          </Route>
          <Route path="/:path?" exact>
            <AuthLayout>
              <Switch>
                <Route path="*">
                  {loggedIn ? <Redirect to="/messenger/chat" /> : <Redirect to="/auth/login" />}
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
