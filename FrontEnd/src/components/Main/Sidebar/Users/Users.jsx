// --------------- import Dependecies ------------------
import { connect } from 'react-redux'
import { useDarkModeContext } from '../../../../context/DarkModeContext'

// ---------------------- import assets --------------------
import Magnifier from '../../../../Assets/img/magnifier.png'

// --------------- import components -------------------
import User from './User'
import NoUser from './NoUser'

const Users = ({ onlineUsers, me }) => {
  const { dark } = useDarkModeContext()
  const hasOnlineUser = onlineUsers.length > 0
  const renderUsers = onlineUsers.map((user) => {
    if (user.user.hash !== me.hash) {
      return <User key={user.user.hash} user={user} />
    }
    return null
  })
  return (
    <div className={dark ? 'contact-warpper dark' : 'contact-warpper light'}>
      <div className="header">
        <div className="page-title">کاربران آنلاین</div>
        <div className="search-bar">
          <img src={Magnifier} alt="search" className="img-responsive" />
          <input
            type="search"
            placeholder="دنبال چی میگردی؟"
            name="search"
            className="search-contact"
          />
        </div>
      </div>
      <div className="contact">
        <ul className="nav nav-tabs custom-nav-style" id="myTab" role="tablist">
          {hasOnlineUser && renderUsers}
          {!hasOnlineUser && <NoUser />}
        </ul>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    me: state.main.me,
    onlineUsers: state.main.onlineUsers
  }),
  (dispatch) => ({})
)(Users)
