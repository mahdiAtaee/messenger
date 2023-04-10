import 'bootstrap/dist/css/bootstrap.min.css'
import { useDarkModeContext } from './context/DarkModeContext'

import SettingsPage from './Main/pages/SettingsPage'
import ContactPage from './Main/pages/ContactPage'
import GroupPage from './Main/pages/GroupPage'
import NotFoundPage from './Main/pages/NotFoundPage'
import Login from './Auth/Login'
import Register from './Auth/Register'

import LocationService from './Services/LocationService'
import MessageService from './Services/MessageService'

import MainLayout from './Main/Layout'
import AuthLayout from './Auth/Layout'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const { dark } = useDarkModeContext()
  const messageService = new MessageService()

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
                  <NotFoundPage />
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
