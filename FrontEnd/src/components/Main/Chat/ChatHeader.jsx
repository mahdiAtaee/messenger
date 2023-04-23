// ------------------ import dependencies --------------------
import { useDarkModeContext } from '../../../context/DarkModeContext'
import { actionTypes, useShowChatBoxDispatch } from '../../../context/ShowChatContext'
import { useState } from 'react'

// --------------- import assets -----------------
import Menu from '../../../Assets/img/dots.png'
import Call from '../../../Assets/img/telephone.png'
import VideoCall from '../../../Assets/img/video.png'
import User from '../../../Assets/img/default_user-5.jpg'
import BackArrow from '../../../Assets/img/back-arrow.png'
import Delete from '../../../Assets/img/delete.png'

const ChatHeader = ({ username }) => {
  const [showMoreModal, setShowMoreModal] = useState(false)
  const { dark } = useDarkModeContext()
  const dispatch = useShowChatBoxDispatch()
  const handleBackToDashboard = () => {
    dispatch({
      type: actionTypes.HIDE_CHAT_BOX
    })
  }

  return (
    <header className={dark ? 'chat-header dark' : 'chat-header light'}>
      <div className="right-section">
        <div className="backToDashboard" onClick={handleBackToDashboard}>
          <img src={BackArrow} alt="back" />
        </div>
        <div className="user-profile">
          <img src={User} alt="" className="img-responsive" />
        </div>
        <div className="username">{username}</div>
      </div>
      <div className="left-section">
        <div className="call">
          <img src={Call} alt="call" className="img-responsive" />
        </div>
        <div className="video-call">
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
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ChatHeader
