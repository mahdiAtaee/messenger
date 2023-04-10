/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../Assets/img/chat.png'
import Messenger from '../../Assets/img/messenger.png'
// import Notification from '../../Assets/img/alarm.png'
import Settings from '../../Assets/img/settings.png'
import Profile from '../../Assets/img/user.png'
import Light_Bulb from '../../Assets/img/light-bulb.png'
import People from '../../Assets/img/people.png'

import { actionTypes, useDarkModeContext, useDarkModeDispatch } from '../../context/DarkModeContext'
import { useState } from 'react'

const Sidebar = () => {
  const dispatch = useDarkModeDispatch()
  const { dark } = useDarkModeContext()
  const [activePage, setActivePage] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if (!dark) {
      dispatch({
        type: actionTypes.DARK_MODE
      })
      return
    }
    dispatch({
      type: actionTypes.LIGHT_MODE
    })
  }

  return (
    <div className={dark ? 'sidebar dark' : 'sidebar light'}>
      <ul>
        <li>
          <Link
            to="/messenger/chat"
            className="flex-center-between"
            onClick={() => setActivePage('messenger')}>
            <img src={Logo} alt="logo" className="img-responsive" />
          </Link>
        </li>
        <li className={activePage === 'messenger' ? 'active item' : 'item'}>
          <Link
            to="/messenger/chat"
            className="flex-center-between"
            onClick={() => setActivePage('messenger')}>
            <img src={Messenger} alt="Messenger" className="img-responsive" />
          </Link>
        </li>
        <li className={activePage === 'group' ? 'active item' : 'item'}>
          <Link to="/messenger/group" className="flex-center-between" onClick={() => setActivePage('group')}>
            <img src={People} alt="People" className="img-responsive" />
          </Link>
        </li>
        {/* <li>
            <Link to="/notification" className="flex-center-between">
              <img src={Notification} alt="notification" className="img-responsive" />
            </Link>
          </li> */}
        <li className={activePage === 'settings' ? 'settings active item' : 'settings item'}>
          <NavLink to="/messenger/settings" onClick={() => setActivePage('settings')}>
            <img src={Settings} alt="settings" className="img-responsive" />
          </NavLink>
        </li>
        <li className="light-dark-mode item">
          <a href="" className="flex-center-between" onClick={(e) => handleClick(e)}>
            <img src={Light_Bulb} alt="Bulb" className="img-responsive" />
          </a>
        </li>
        <li className="profile">
          <Link to="/messenger/settings" className="flex-center-between-column">
            <div className="avatar-wrapper">
              <img src={Profile} alt="Profile" className="img-responsive" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
