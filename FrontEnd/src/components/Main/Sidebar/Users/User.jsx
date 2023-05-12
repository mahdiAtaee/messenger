import { UserIcon } from '../../../../Assets/img/user.png'
const User = ({ user }) => {
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
          <img src={user.avatar} alt="user" className="img-responsive" />
        </span>
        <div className="user-chat">
          <span className="username">{user.name}</span>
        </div>
        <div className="user-icon">
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
