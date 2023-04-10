import Header from '../components/Chat-Header'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Main from '../components/Main'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <Header />
      <Chat />
    </>
  )
}

export default Layout
