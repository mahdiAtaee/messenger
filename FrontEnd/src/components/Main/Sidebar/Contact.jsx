// -------------------- import dependencies ----------------------
import { useDarkModeContext } from '../../../context/DarkModeContext'
import { actionTypes, useShowChatBoxDispatch } from '../../../context/ShowChatContext'

// ------------------ import assets ---------------------
import Magnifier from '../../../Assets/img/magnifier.png'
import User1 from '../../../Assets/img/default_user-5.jpg'
import User2 from '../../../Assets/img/default_user-1.jpg'
import User3 from '../../../Assets/img/default_user-2.jpg'
import User4 from '../../../Assets/img/default_user-3.jpg'
import User5 from '../../../Assets/img/default_user-4.jpg'


const Contact = () => {
  const { dark } = useDarkModeContext()
  const dispatch = useShowChatBoxDispatch()

  const handleShowChatBox = (e) => {
    dispatch({
      type: actionTypes.SHOW_CHAT_BOX
    })
  }

  return (
    <div className={dark ? 'contact-warpper dark' : 'contact-warpper'}>
      <div className="header">
        <div className="page-title">پیــام هــا</div>
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
          <li role="presentation">
            <a
              href="#/"
              className="nav-link"
              id="user-one-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-one"
              type="button"
              role="tab"
              aria-controls="user-one"
              onClick={handleShowChatBox}
              aria-selected="true">
              <span className="user-profile">
                <img src={User1} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
                <span className="last-chat">عالی! خیلی خوبه ❤</span>
              </div>
              <div className="badge chat-time">21:00 بعدازظهر</div>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#/"
              className="nav-link"
              id="user-two-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-two"
              type="button"
              role="tab"
              aria-controls="user-two"
              onClick={handleShowChatBox}
              aria-selected="true">
              <span className="user-profile">
                <img src={User2} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
                <span className="last-chat">عالی! خیلی خوبه ❤</span>
              </div>
              <div className="badge chat-time">01:00 صبح</div>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#/"
              className="nav-link"
              id="user-three-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-three"
              type="button"
              role="tab"
              aria-controls="user-three"
              onClick={handleShowChatBox}
              aria-selected="true">
              <span className="user-profile">
                <img src={User3} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
                <span className="last-chat">عالی! خیلی خوبه ❤</span>
              </div>
              <div className="badge chat-time">18:00 بعدازظهر</div>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#/"
              className="nav-link"
              id="user-four-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-four"
              type="button"
              role="tab"
              aria-controls="user-four"
              onClick={handleShowChatBox}
              aria-selected="true">
              <span className="user-profile">
                <img src={User4} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
                <span className="last-chat">عالی! خیلی خوبه ❤</span>
              </div>
              <div className="badge chat-time">10:00 صبح</div>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#/"
              className="nav-link"
              id="user-five-tab"
              data-bs-toggle="tab"
              data-bs-target="#user-five"
              type="button"
              role="tab"
              aria-controls="user-five"
              onClick={handleShowChatBox}
              aria-selected="true">
              <span className="user-profile">
                <img src={User5} alt="user" className="img-responsive" />
              </span>
              <div className="user-chat">
                <span className="username">کاربر 1</span>
                <span className="last-chat">عالی! خیلی خوبه ❤</span>
              </div>
              <div className="badge chat-time">9:30 صبح</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
