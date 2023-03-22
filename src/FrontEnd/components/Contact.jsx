import Magnifier from '../../Assets/img/magnifier.png'
import User1 from '../../Assets/img/man1.jpg'
import User2 from '../../Assets/img/man2.jpg'
import User3 from '../../Assets/img/man3.jpg'
import User4 from '../../Assets/img/woman1.jpg'
import User5 from '../../Assets/img/woman2.jpg'
const Contact = () => {
  return (
    <div className="contact-warpper">
      <div className="header">
        <div className="search-bar">
          <img src={Magnifier} alt="search" className="img-responsive" />
          <input
            type="search"
            placeholder="دنبال چی میگردی؟"
            name="search"
            className="search-contact"
          />
        </div>
        <div className="page-title">پیــام هــا</div>
      </div>
      <div className="contact">
        <ul>
          <li className='active'>
            <a href="">
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
          <li>
            <a href="">
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
          <li>
            <a href="">
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
          <li>
            <a href="">
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
          <li>
            <a href="">
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
