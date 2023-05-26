// --------------- import Dependecies ------------------
import { connect } from 'react-redux'
import { useDarkModeContext } from '../../../../context/DarkModeContext'
import {
  actionTypes,
  useShowMapContext,
  useShowMapDispatch
} from '../../../../context/ShowIndexPage'

// ---------------------- import assets --------------------
import Magnifier from '../../../../Assets/img/magnifier.png'

// --------------- import components -------------------
import User from './User'
import NoUser from './NoUser'

const Users = ({ onlineUsers, me }) => {
  const dispatch = useShowMapDispatch()
  const { isShowMap } = useShowMapContext()
  const { dark } = useDarkModeContext()

  const hasOnlineUser = onlineUsers.length > 0
  const renderUsers = onlineUsers.map((user) => {
    if (user.user.hash !== me.hash) {
      return <User key={user.user.hash} user={user} />
    }
    return null
  })
  const ShowMap = () => {
    dispatch({ type: actionTypes.SHOW_MAP })
  }
  return (
    <div
      className={dark ? 'contact-warpper dark' : 'contact-warpper light'}
      id={isShowMap !== false ? 'display-none' : ''}>
      <div className="header">
        <div className="top-bar">
          <div className="page-title">کاربران آنلاین</div>
          <div className="show-map">
            <button className="show-map-button" onClick={() => ShowMap()}>
              نمایش نقشه
            </button>
          </div>
        </div>
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

export default connect((state) => ({
  me: state.main.me,
  onlineUsers: state.main.onlineUsers
}))(Users)
