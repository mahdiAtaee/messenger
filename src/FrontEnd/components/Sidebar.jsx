import Logo from '../../Assets/img/chat.png'
import Messenger from '../../Assets/img/messenger.png'
import Notification from '../../Assets/img/alarm.png'
import Settings from '../../Assets/img/settings.png'
import Profile from '../../Assets/img/user.png'
import Bulb from '../../Assets/img/lightbulb.png'
import People from '../../Assets/img/people.png'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" className="flex-center-between">
            <img src={Logo} alt="logo" className="img-responsive" />
          </a>
        </li>
        <li className='active'>
          <a href="#" className="flex-center-between">
            <img src={Messenger} alt="Messenger" className="img-responsive" />
          </a>
        </li>
        <li>
          <a href="#" className="flex-center-between">
            <img src={People} alt="People" className="img-responsive" />
          </a>
        </li>
        <li>
          <a href="" className="flex-center-between">
            <img src={Notification} alt="notification" className="img-responsive" />
          </a>
        </li>
        <li className='settings'>
          <a href="" className="flex-center-between">
            <img src={Settings} alt="settings" className="img-responsive" />
          </a>
        </li>
        <li className='light-dark-mode'>
          <a href="" className="flex-center-between">
            <img src={Bulb} alt="Bulb" className="img-responsive" />
          </a>
        </li>
        <li className="profile">
          <a href="" className="flex-center-between-column">
            <div className="avatar-wrapper">
              <img src={Profile} alt="Profile" className="img-responsive" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
