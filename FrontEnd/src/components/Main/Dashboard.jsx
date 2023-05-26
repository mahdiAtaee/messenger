// ------------------- import Dependecies -----------------
import { useContext, useState } from 'react'
import { connect } from 'react-redux'
import MainAction from '../../Store/Actions/MainAction'
import ChatAction from '../../Store/Actions/ChatAction'
import { useLocation } from 'react-router-dom'
import ChatContext from '../../context/ChatContext'
import EventManager from '../../EventManager'
import Notification from '../../Services/Notification'
import ConversationContext from '../../context/ConversationContext'

// ----------------- import components ----------------
import Navigation from './Sidebar/index'
import Contact from './Sidebar/Contact'
import Group from './Sidebar/Group'
import Settings from './Sidebar/Settings'
import Chat from './Chat'
import NotFoundPage from '../Partials/NotFoundPage/NotFoundPage'
import Users from '../Main/Sidebar/Users/Users'
import NearBy from '../Main/Map/NearBy'

const Dashboard = ({ me, currentChat, updateOnlineUsers, initNewChat, finishChat }) => {
  const chat = useContext(ChatContext)
  const { peerService, eventManager, socketService } = chat
  const [requestSender, setRequestSender] = useState(null)
  const [requestReceiver, setRequestReceiver] = useState(null)
  const location = useLocation()

  socketService.$on('newChatRequest', (data) => {
    Notification.fire({
      title: 'درخواست گفتگو',
      icon: 'warning',
      text: 'یک درخواست گفتگو برای شما ارسال شده است.',
      showCancelButton: true,
      confirmButtonText: 'باشه',
      cancelButtonText: 'علاقه ای ندارم'
    }).then((result) => {
      if (result.value) {
        socketService.$emit('newChatResponse', {
          to: data.requestor,
          sender: me.hash,
          answer: true
        })
      } 
      if(!result.value) {
        socketService.$emit('newChatResponse', {
          to: data.requestor,
          sender: me.hash,
          answer: false
        })
      }
    })
  })

  socketService.$on('finishChat', (data) => {
    finishChat(data)
  })

  socketService.$on('newChatResponse', (data) => {
    if (data.answer) {
      const connection = peerService.connect(data.sender)
      setRequestSender(connection)
      initNewChat({
        participants: data.sender
      })
    } else {
      Notification.fire({
        title: 'نتیجه درخواست گفتگو',
        icon: 'error',
        text: 'درخواست گفتگوی شما پذیرفته نشد',
        confirmButtonText: 'باشه'
      })
    }
  })

  socketService.$on('onlineUsers', (data) => {
    updateOnlineUsers({ onlineUsers: data.onlineUsers })
  })

  if (eventManager) {
    eventManager.on('chatRequest', (user) => {
      Notification.fire({
        title: 'ارسال درخواست',
        icon: 'success',
        text: 'در صورت تایید به صفحه گفتگو هدایت خواهید شد.',
        confirmButtonText: 'باشه'
      })
      socketService.$emit('newChatRequest', {
        to: user.hash,
        requestor: me.hash
      })
    })
  }

  peerService.on('connection', (connection) => {
    initNewChat({
      participants: connection.peer
    })
    setRequestReceiver(connection)
  })

  eventManager.on('finishChat', (data) => {
    finishChat(data)
    socketService.$emit('finishChat', data)
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
    <ConversationContext.Provider value={{ sender: requestSender, receiver: requestReceiver }}>
      <Navigation />
      {CurrentPageSide()}
      {CurrentScene}
    </ConversationContext.Provider>
  )
}

export default connect(
  (state) => ({
    me: state.main.me,
    currentChat: state.chat.currentChat
  }),
  (dispatch) => {
    return {
      initNewChat: (payload) => dispatch({ type: ChatAction.NEW_CHAT_INIT, payload }),
      finishChat: (payload) => dispatch({ type: ChatAction.FINISH_CHAT_INIT, payload }),
      updateOnlineUsers: (payload) =>
        dispatch({ type: MainAction.UPDATE_ONLINE_USER_INIT, payload })
    }
  }
)(Dashboard)
