import 'bootstrap/dist/css/bootstrap.min.css'
import { useDarkModeContext } from './context/DarkModeContext'

import SettingsPage from './FrontEnd/pages/SettingsPage'
import ContactPage from './FrontEnd/pages/ContactPage'
import GroupPage from './FrontEnd/pages/GroupPage'
import NotFoundPage from './FrontEnd/pages/NotFoundPage'

import Layout from './FrontEnd/Layout'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const { dark } = useDarkModeContext()

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/group">
              <GroupPage />
            </Route>
            <Route path="/messenger">
              <ContactPage />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
