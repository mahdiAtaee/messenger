// --------------- import assets -----------------
import Send from '../../../Assets/img/send.png'


const ChatFooter = () => {
  return (
    <div className="chat-footer">
    <input type="text" id="sendMessage" placeholder="پیام خود را بنویسید ..." />
    <img src={Send} alt="Send" className="img-responsive" />
  </div>
  )
}
 
export default ChatFooter
 