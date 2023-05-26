// ---------------------- import dependecies ---------------
import { useContext } from 'react'
import ChatContext from "../../../../context/ChatContext";
// ---------------------- import assets ---------------
import UserIcon from '../../../../Assets/img/user.png'
const User = ({ user }) => {
  const {eventManager} = useContext(ChatContext);
  const handleChatRequest = (e, user) => {
    e.preventDefault()
    eventManager.fire('chatRequest', user)
  }
  console.log(user)
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
        aria-selected="true">
        <span className="user-profile">
          <img src={user.user.avatar} alt="user" className="img-responsive" />
        </span>
        <div className="user-chat">
          <span className="username">{user.user.name}</span>
        </div>
        <div className="user-icon" onClick={e => handleChatRequest(e, user.user)}>
          <img src={UserIcon} alt="+" className="img-responsive" />
        </div>
      </a>
    </li>
  )
}

export default User
User.defaultProps = {
  name: 'کاربر آنلاین'
}
