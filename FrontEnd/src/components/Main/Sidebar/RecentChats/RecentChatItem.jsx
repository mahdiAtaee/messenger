// -------------- import dependecies ------------------
import { useContext } from 'react'
import ChatContext from '../../../../context/ChatContext'

// -------------- import assets -----------------
import UserIcon from '../../../../Assets/img/user.png'

function RecentChatItem({ recentChat }) {
  const { eventManager } = useContext(ChatContext)
  console.log(recentChat)
  const handleActivateChat = () => {
    eventManager.fire('activateRecentChat', { chatID: recentChat._id })
  }

  return (
    <li className="active" role="presentation">
      <a
        href="#/"
        className="nav-link"
        id="user-one-tab"
        data-bs-toggle="tab"
        data-bs-target="#user-one"
        type="button"
        role="tab"
        aria-controls="user-one"
        aria-selected="true"
        onClick={() => handleActivateChat()}>
        <span className="user-profile">
          <img src={recentChat.user.details.avatar} alt="user" className="img-responsive" />
        </span>
        <div className="user-chat">
          <span className="username">{recentChat.user.details.name}</span>
          <span className="last-message">{recentChat.lastMessage ? recentChat.lastMessage.content : " "}</span>
        </div>
        <div className="message-time">
          <span>{recentChat.lastMessage ? new Date(recentChat.lastMessage.created_at).toLocaleDateString('fa-IR') :  new Date(recentChat.created_at).toLocaleDateString('fa-IR')}</span>
        </div>
      </a>
    </li>
  )
}

export default RecentChatItem
