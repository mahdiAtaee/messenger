// -------------- import dependecies -------------
import { useContext } from 'react'
import ChatContext from '../../../context/ChatContext'
import ConversationContext from '../../../context/ConversationContext'
import ChatAction from '../../../Store/Actions/ChatAction'
import { connect } from 'react-redux'

// ------------------ import components -----------------
import ChatHeader from './ChatHeader'
import ChatContent from './ChatContent'
import ChatFooter from './ChatFooter'

function ActiveChat({ me, saveMessage, sendMessage }) {
  const chat = useContext(ChatContext)
  const { peerService, eventManager } = chat
  const { sender, receiver } = useContext(ConversationContext)
  
  if (sender) {
    sender.on('data', (data) => {
      sendMessage(data)
    })
  }
  if (receiver) {
    receiver.on('data', (data) => {
      sendMessage(data)
    })
  }

  eventManager.on('message', (data) => {
    if (sender) {
      sender.send({ ...data, sender: me.hash, created_at: new Date() })
    } 
    if (receiver) {
      receiver.send({ ...data, sender: me.hash, created_at: new Date() })
    }
    saveMessage({ ...data, sender: me.hash, created_at: new Date() })
  })

  return (
    <div className="content">
      <ChatHeader />
      <ChatContent />
      <ChatFooter />
    </div>
  )
}

export default connect((state) => ({
  me: state.main.me
}),
(dispatch) => ({
  sendMessage: (payload) => dispatch({ type: ChatAction.SEND_MESSAGE_INIT, payload }),
  saveMessage: (payload) => dispatch({ type: ChatAction.SAVE_MESSAGE_INIT, payload })
}))(ActiveChat)
