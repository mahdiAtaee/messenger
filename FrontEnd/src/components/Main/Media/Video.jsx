import React, { useRef, useEffect, useContext } from 'react'
import ChatContext from '../../../context/ChatContext'
import { connect } from 'react-redux'

function Video({ stream, currentChat, me }) {
  const video = useRef(null)
  const { eventManager } = useContext(ChatContext)
  const { participants } = currentChat
  const otherParticipantHash = Object.keys(participants)
    .filter((item) => item !== me.hash)
    .pop()

  useEffect(() => {
    if (stream) {
      video.current.srcObject = stream
    }
  })

  const handleEndCall = () => {
    if (stream) {
      stream.getTracks().forEach(function (track) {
        track.stop()
      })
      eventManager.fire('finishCall', { chatID: currentChat.id, to: otherParticipantHash })
    }
  }

  return (
    <div className="middle" id="scroll">
      <div className="container">
        <video
          ref={video}
          style={{ width: '100%', height: '100%', backgroundColor: '#ddd' }}
          controls
          id="videoPlayer"
          autoPlay
          playsInline></video>
        <button onClick={() => handleEndCall()}>end call</button>
      </div>
    </div>
  )
}

export default connect((state) => ({
  me: state.main.me,
  currentChat: state.chat.currentChat
}))(Video)
