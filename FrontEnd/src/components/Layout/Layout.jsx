import { connect } from 'react-redux'
import MainAction from '../../Store/Actions/MainAction.js'
// import Header from '../Main/Chat-Header'
import Sidebar from '../Main/Sidebar'
import Chat from '../Main/Chat'
import Loader from '../Partials/Loader'

const Layout = ({ children, isInit }) => {
  const getMainRender = () => {
    return (
      <>
        <Sidebar />
        {children}
        <Chat />
      </>
    )
  }

  return <>{isInit ? <Loader /> : getMainRender()}</>
}

export default connect(
  (state) => {
    return {
      isInit: state.main.isInit
    }
  },
  (dispatch) => {
    return {
      init: () => {
        dispatch({ type: MainAction.INIT_REQUESTED, payload: null })
      }
    }
  }
)(Layout)
