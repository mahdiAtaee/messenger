/* eslint-disable jsx-a11y/anchor-is-valid */
// ------------------- import dependencies ----------------
import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  actionTypes,
  useDarkModeContext,
  useDarkModeDispatch
} from '../../../context/DarkModeContext'

// --------------------import assets -------------------
import Logo from '../../../Assets/img/chat.png'
import Messenger from '../../../Assets/img/messenger.png'
import Settings from '../../../Assets/img/settings.png'
import Profile from '../../../Assets/img/user.png'
import Light_Bulb from '../../../Assets/img/light-bulb.png'
import People from '../../../Assets/img/people.png'

const Index = () => {
  const messengerRef = useRef()
  const groupRef = useRef()
  const settingsRef = useRef()

  const dispatch = useDarkModeDispatch()
  const { dark } = useDarkModeContext()
  const [activePage, setActivePage] = useState('messenger')
  const [position, setPosition] = useState(0)

  const getPosition = () => {
    if (activePage === 'messenger') {
      const messengerPosition = messengerRef.current.offsetLeft
      setPosition(messengerPosition + 3)
    } else if (activePage === 'group') {
      const groupPosition = groupRef.current.offsetLeft
      setPosition(groupPosition + 3)
    } else if (activePage === 'settings') {
      const settingsPosition = settingsRef.current.offsetLeft
      setPosition(settingsPosition + 3)
    } else {
      const messengerPosition = messengerRef.current.offsetLeft
      setPosition(messengerPosition + 3)
    }
  }
  useEffect(() => {
    getPosition()
  }, [activePage])

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
        <li className={activePage === 'messenger' ? 'active item' : 'item'} ref={messengerRef}>
          <Link
            to="/messenger/chat"
            className="flex-center-between"
            onClick={() => setActivePage('messenger')}>
            <img src={Messenger} alt="Messenger" className="img-responsive" />
            <div className="text">پیام ها</div>
          </Link>
        </li>
        <li className={activePage === 'group' ? 'active item' : 'item'} ref={groupRef}>
          <Link
            to="/messenger/group"
            className="flex-center-between"
            onClick={() => setActivePage('group')}>
            <img src={People} alt="People" className="img-responsive" />
            <div className="text">کاربران</div>
          </Link>
        </li>
        <li
          className={activePage === 'settings' ? 'settings active item' : 'settings item'}
          ref={settingsRef}>
          <NavLink to="/messenger/settings" onClick={() => setActivePage('settings')}>
            <img src={Settings} alt="settings" className="img-responsive" />
            <div className="text">تنظیمات</div>
          </NavLink>
        </li>
        <li className="light-dark-mode item">
          <a href="" className="flex-center-between" onClick={(e) => handleClick(e)}>
            <img src={Light_Bulb} alt="Bulb" className="img-responsive" />
            <div className="text">حالت شب</div>
          </a>
        </li>
        <li className="profile item">
          <Link to="/messenger/settings" className="flex-center-between-column">
            <div className="avatar-wrapper">
              <img src={Profile} alt="Profile" className="img-responsive" />
              <div className="text">پروفایل</div>
            </div>
          </Link>
        </li>
        <div className="indicator" style={{ left: `${position}px` }}></div>
      </ul>
    </div>
  )
}

export default Index
