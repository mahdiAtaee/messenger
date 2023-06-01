// ------------------- import dependecies ------------------
import React, { useRef, useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import ChatContext from '../../../context/ChatContext'


// ------------------- import assets -------------------
import Call from '../../../Assets/img/telephone.png'

function Audio({ stream, currentChat, me }) {
    const { eventManager } = useContext(ChatContext);
  const audio = useRef(null)
  const { participants } = currentChat
  const otherParticipantHash = Object.keys(participants)
    .filter((item) => item !== me.hash)
    .pop()
  const { name, avatar } = participants[otherParticipantHash]
  useEffect(() => {
    if (stream) {
      audio.current.srcObject = stream
    }
  })
  const handleEndCall = (e) => {
    e.preventDefault()
    eventManager.fire('endCall')
  }
  return (
    <div className="middle" id="scroll">
      <div className="call-wrapper">
        <div className="user-avatar">
          <p className="participant-name">{name}</p>
          <img src={avatar} alt="user_avatar" className="avatar" />
        </div>
        <div className="end-call" onClick={e => handleEndCall(e)}>
          <div className="end-call-img-wrapper">
            <img src={Call} alt="call" className="end-call-button" />
          </div>
        </div>
      </div>
      <div className="container">
        <audio
          ref={audio}
          style={{ width: '100%', height: '100%',opacity:0 }}
          id="audioPlayer"
          controls
          autoPlay
          playsInline></audio>
      </div>
    </div>
  )
}

export default connect((state) => ({ currentChat: state.chat.currentChat, me: state.main.me }))(
  Audio
)
