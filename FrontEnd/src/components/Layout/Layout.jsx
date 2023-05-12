// ------------import dependencies ----------------
import { useEffect } from 'react'
import { connect } from 'react-redux'
import MainAction from '../../Store/Actions/MainAction.js'
import LocationService from '../../Services/LocationService.js'
import ClientService from '../../Services/ClientService.js'
import PeerService from '../../Services/PeerService.js'
import SockClient from '../../Services/SockClient.js'
import EventManager from '../../EventManager.js'
import ChatContext from '../../context/ChatContext.js'

// --------------- import components -----------------
// import Header from '../Main/Chat-Header'
import Sidebar from '../Main/Sidebar'
import Chat from '../Main/Chat'
import Loader from '../Partials/Loader'
import UsersAction from '../../Store/Actions/UsersAction.js'
import Dashboard from '../Main/Dashboard.jsx'

const Layout = ({ children, isInit, init, dispatchLocation, me }) => {
  const locationService = new LocationService()
  const clientService = new ClientService()
  const peerService = new PeerService()
  const socket = new SockClient()

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

  const buildContextData = (me) => {
    if (me) {
      clientService.setCurrentClient(me)
      peerService.setClient(clientService)
      socket.setClient(clientService)
      socket.connect()
      return {
        peerService: peerService.init(),
        eventManger: new EventManager(),
        socketService: socket
      }
    }
    return {}
  }

  const getMainRender = () => {
    return (
      <ChatContext.Provider value={buildContextData(me)}>
        {/* <Sidebar />
        {children}
        <Chat /> */}
        <Dashboard />
      </ChatContext.Provider>
    )
  }

  return <>{isInit ? <Loader /> : getMainRender()}</>
}

export default connect(
  (state) => {
    return {
      isInit: state.main.isInit,
      me: state.main.me
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
