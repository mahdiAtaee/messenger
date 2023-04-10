import Send from '../../Assets/img/send.png'
import User from '../../Assets/img/man2.jpg'
import { useDarkModeContext } from '../../context/DarkModeContext'
const Main = () => {
  const { dark } = useDarkModeContext()
  return (
    <div className={dark ? 'chat-box dark' : 'chat-box'}>
      <div className="chat-wrapper">
        <div className="message receive">
          <span className="text-message">سلام حالت چطوره؟</span>
          <span className="time">13:00 بعدازظهر</span>
          {/* <img src={User} alt="user" className="img-responsive profile" /> */}
        </div>
        <div className="message send">
          <span className="text-message">سلام مرسی.</span>
          <span className="time">11:00 قبل از ظهر</span>
        </div>
        <div className="message send">
          <span className="text-message">چه خبر؟</span>
          <span className="time">11:00 قبل از ظهر</span>
        </div>
      </div>
      <div className="chat-footer">
        <input type="text" id="sendMessage" placeholder="پیام خود را بنویسید ..." />
        <img src={Send} alt="Send" className="img-responsive" />
      </div>
    </div>
  )
}

export default Main
