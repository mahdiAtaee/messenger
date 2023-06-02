// ------------------ import dependencies --------------------
import { useDarkModeContext } from '../../../context/DarkModeContext'
import { actionTypes, useShowChatBoxDispatch } from '../../../context/ShowChatContext'
import { useContext, useState } from 'react'
import ChatContext from '../../../context/ChatContext'
import { connect } from 'react-redux'

// --------------- import assets -----------------
import Menu from '../../../Assets/img/dots.png'
import Call from '../../../Assets/img/telephone.png'
import VideoCall from '../../../Assets/img/video.png'
import BackArrow from '../../../Assets/img/back-arrow.png'
import Delete from '../../../Assets/img/delete.png'

const ChatHeader = ({ currentChat, me }) => {
  const { eventManager } = useContext(ChatContext)
  const [showMoreModal, setShowMoreModal] = useState(false)
  const { dark } = useDarkModeContext()
  const dispatch = useShowChatBoxDispatch()
  const { participants } = currentChat
  const otherParticipantHash = Object.keys(participants)
    .filter((item) => item !== me.hash)
    .pop()
  const { name, avatar } = participants[otherParticipantHash]
  const finishCurrentChat = (e) => {
    e.preventDefault()
    eventManager.fire('finishChat', { chatID: currentChat.id, to: otherParticipantHash })
  }
  const handleBackToDashboard = () => {
    dispatch({
      type: actionTypes.HIDE_CHAT_BOX
    })
  }
  const startVideoCall = (e) => {
    e.preventDefault()
    eventManager.fire('startVideoCall', { to: otherParticipantHash })
  }

  const startVoiceCall = (e) => {
    e.preventDefault()
    eventManager.fire('startVoiceCall', { to: otherParticipantHash })
  }

  return (
    <header className={dark ? 'chat-header dark' : 'chat-header light'}>
      <div className="right-section">
        <div className="backToDashboard" onClick={handleBackToDashboard}>
          <img src={BackArrow} alt="back" />
        </div>
        <div className="user-profile">
          <img src={avatar} alt="" className="img-responsive" />
        </div>
        <div className="name-wrapper">
          <div className="username">{name}</div>
          <div className="user-status">آنلاین</div>
        </div>
      </div>
      <div className="left-section">
        <div className="call" onClick={(e) => startVoiceCall(e)}>
          <img src={Call} alt="call" className="img-responsive" />
        </div>
        <div className="video-call" onClick={(e) => startVideoCall(e)}>
          <img src={VideoCall} alt="Video call" className="img-responsive" />
        </div>
        <div className="more" onClick={() => setShowMoreModal(!showMoreModal)}>
          <img src={Menu} alt="menu" className="img-responsive" />
          <div className={showMoreModal ? 'more-modal show' : 'more-modal'}>
            <ul>
              <li>
                <span className="title">حذف پیام ها</span>
                <img src={Delete} alt="Delete" />
              </li>
              <li onClick={(e) => finishCurrentChat(e)}>
                <span className="title">پایان چت</span>
                <img src={Delete} alt="Delete" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default connect((state) => ({
  me: state.main.me,
  currentChat: state.chat.currentChat
}))(ChatHeader)
