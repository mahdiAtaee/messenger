// ------------------- import Dependecies -----------------
import { useContext, useState } from 'react'
import { connect } from 'react-redux'
import MainAction from '../../Store/Actions/MainAction'
import ChatAction from '../../Store/Actions/ChatAction'
import { useLocation } from 'react-router-dom'
import ChatContext from '../../context/ChatContext'
import EventManager from '../../EventManager'

// ----------------- import components ----------------
import Navigation from './Sidebar/index'
import Contact from './Sidebar/Contact'
import Group from './Sidebar/Group'
import Settings from './Sidebar/Settings'
import Chat from './Chat/index'
import NotFoundPage from '../Partials/NotFoundPage/NotFoundPage'
import Users from '../Main/Sidebar/Users/Users'
import NearBy from '../Main/Map/NearBy'

const Dashboard = ({ currentChat, updateOnilneUsers }) => {
  const chat = useContext(ChatContext)
  const { peerService, eventManger, socketService } = chat
  const eventManager = new EventManager()
  const { on, fire } = eventManager
  const location = useLocation()

  socketService.$on('onlineUsers', (data) => {
    updateOnilneUsers({ onlineUsers: data.onlineUsers })
  })

  const CurrentPageSide = () => {
    let component
    switch (location.pathname) {
      case '/messenger/chat':
        component = <Users />
        break
      case '/messenger/group':
        component = <Group />
        break
      case '/messenger/settings':
        component = <Settings />
        break
      default:
        component = <NotFoundPage />
        break
    }
    return component
  }

  const CurrentScene = currentChat ? <Chat /> : <NearBy />

  return (
    <>
      <Navigation />
      {CurrentPageSide()}
      {CurrentScene}
    </>
  )
}

export default connect(
  (state) => ({
    me: state.main.me,
    currentChat: state.chat.currentChat
  }),
  (dispatch) => {
    return {
      updateOnilneUsers: (payload) =>
        dispatch({ type: MainAction.UPDATE_ONLINE_USER_INIT, payload })
    }
  }
)(Dashboard)
