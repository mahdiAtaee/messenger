import Sidebar from '../components/Main/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
