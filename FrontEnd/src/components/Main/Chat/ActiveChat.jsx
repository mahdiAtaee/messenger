// -------------- import dependecies -------------
import { useContext, useState } from 'react'
import ChatContext from '../../../context/ChatContext'
import ConversationContext from '../../../context/ConversationContext'
import ChatAction from '../../../Store/Actions/ChatAction'
import { connect } from 'react-redux'

// ------------------ import components -----------------
import ChatHeader from './ChatHeader'
import ChatContent from './ChatContent'
import ChatFooter from './ChatFooter'
import MediaContent from '../Media'

function ActiveChat({ me, saveMessage, sendMessage }) {
  const chat = useContext(ChatContext)
  const { peerService, eventManager } = chat
  const { sender, receiver } = useContext(ConversationContext)
  const [mediaStream, setMediaStream] = useState(null)

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

  peerService.on('call', (call) => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        call.answer(stream)
        call.on('stream', (remoteStream) => {
          setMediaStream(remoteStream)
        })
      })
      .catch((err) => {
        console.error('user not allowed to video or audio permission.', err)
      })
  })

  eventManager.on('message', (data) => {
    if (sender) {
      sender.send({ ...data, sender: me.hash, created_at: new Date() })
    }
    if (receiver) {
      receiver.send({ ...data, sender: me.hash, created_at: new Date() })
    }
    saveMessage({ ...data, sender: me.hash, created_at: new Date() })
  })

  eventManager.on('startVideoCall', (data) => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        const mediaConnection = peerService.call(data.to, stream)
        mediaConnection.on('stream', (remoteStream) => {
          setMediaStream(remoteStream)
        })
      })
      .catch((err) => {
        console.error('user not allowed to video or audio permission.', err)
      })
  })

  return (
    <div className="content">
      <ChatHeader />
      {mediaStream !== null ? <MediaContent mediaStream={mediaStream} /> : <ChatContent />}
      <ChatFooter />
    </div>
  )
}

export default connect(
  (state) => ({
    me: state.main.me
  }),
  (dispatch) => ({
    sendMessage: (payload) => dispatch({ type: ChatAction.SEND_MESSAGE_INIT, payload }),
    saveMessage: (payload) => dispatch({ type: ChatAction.SAVE_MESSAGE_INIT, payload })
  })
)(ActiveChat)
