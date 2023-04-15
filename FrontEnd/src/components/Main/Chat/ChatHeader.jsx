import Menu from '../../../Assets/img/dots.png'
import Call from '../../../Assets/img/telephone.png'
import VideoCall from '../../../Assets/img/video.png'
import User from '../../../Assets/img/default_user-5.jpg'

import { useDarkModeContext } from '../../../context/DarkModeContext'

const ChatHeader = ({ username }) => {
  const { dark } = useDarkModeContext()

  return (
    <header className={dark ? 'chat-header dark' : 'chat-header light'}>
      <div className="right-section">
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
        <div className="more">
          <img src={Menu} alt="menu" className="img-responsive" />
        </div>
      </div>
    </header>
  )
}

export default ChatHeader
