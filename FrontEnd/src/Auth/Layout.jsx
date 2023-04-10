import Sidebar from '../Main/components/Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
