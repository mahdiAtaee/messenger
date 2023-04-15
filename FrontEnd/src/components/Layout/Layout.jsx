// import Header from '../Main/Chat-Header'
import Sidebar from '../Main/Sidebar'
import Chat from '../Main/Chat'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <Chat />
    </>
  )
}

export default Layout
