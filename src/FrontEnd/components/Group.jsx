import Magnifier from '../../Assets/img/magnifier.png'
import User1 from '../../Assets/img/man1.jpg'
import User2 from '../../Assets/img/man2.jpg'
import User3 from '../../Assets/img/man3.jpg'
import User4 from '../../Assets/img/woman1.jpg'
import User5 from '../../Assets/img/woman2.jpg'
import UserIcon from '../../Assets/img/user.png'
import { actionTypes, useDarkModeContext, useDarkModeDispatch } from '../../context/DarkModeContext'

const Group = () => {
  const dispatch = useDarkModeDispatch()
  const { dark } = useDarkModeContext()

  return (
    <div className={dark ? 'contact-warpper dark' : 'contact-warpper light'}>
      <div className="header">
        <div className="page-title">دوستـــان</div>
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
        <ul>
          <li className="active">
            <a href="">
              <span className="user-profile">
                <img src={User1} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
              </div>
              <div className="user-icon">
                <img src={UserIcon} alt="+" className="img-responsive" />
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <span className="user-profile">
                <img src={User2} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
              </div>
              <div className="user-icon">
                <img src={UserIcon} alt="+" className="img-responsive" />
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <span className="user-profile">
                <img src={User3} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
              </div>
              <div className="user-icon">
                <img src={UserIcon} alt="+" className="img-responsive" />
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <span className="user-profile">
                <img src={User4} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
              </div>
              <div className="user-icon">
                <img src={UserIcon} alt="+" className="img-responsive" />
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <span className="user-profile">
                <img src={User5} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
              </div>
              <div className="user-icon">
                <img src={UserIcon} alt="+" className="img-responsive" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Group
