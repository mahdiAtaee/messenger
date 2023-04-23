// ------------import dependencies ----------------
import { useEffect } from 'react'
import { connect } from 'react-redux'
import MainAction from '../../Store/Actions/MainAction.js'
import MessageService from '../../Services/MessageService.js'
import LocationService from '../../Services/LocationService.js'

// --------------- import components -----------------
// import Header from '../Main/Chat-Header'
import Sidebar from '../Main/Sidebar'
import Chat from '../Main/Chat'
import Loader from '../Partials/Loader'
import UsersAction from '../../Store/Actions/UsersAction.js'

const Layout = ({ children, isInit, init, dispatchLocation }) => {
  const messageService = new MessageService()
  const locationService = new LocationService()
  useEffect(() => {
    init()
    locationService
      .getUserLocation()
      .then((coords) => {
        const { longitude, latitude } = coords
        dispatchLocation({
          longitude,
          latitude
        })
      })
      .catch((error) => console.error(error))
  }, [])

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
      init: () => dispatch({ type: MainAction.INIT_REQUESTED, payload: null }),
      dispatchLocation: (payload) =>
        dispatch({ type: UsersAction.USER_LOCATION_REQUESTED, payload })
    }
  }
)(Layout)
