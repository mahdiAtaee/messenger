import Send from '../../Assets/img/send.png'
import User from '../../Assets/img/man2.jpg'
const Main = () => {
  return (
    <div className="chat-box">
      <div className="chat-wrapper">
        <div className="message receive">
          <span className="text-message">سلام حالت چطوره؟</span>
          <span className="time">13:00 بعدازظهر</span>
          {/* <img src={User} alt="user" className="img-responsive profile" /> */}
        </div>
        <div className="message send" style={{ marginTop: '110px' }}>
          <span className="text-message">سلام مرسی.</span>
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
