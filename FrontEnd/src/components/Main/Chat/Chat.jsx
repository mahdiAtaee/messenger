const Chat = ({ type }) => {
  return (
    <div className={`message ${type}`}>
      <span className="text-message">سلام مرسی.</span>
      <span className="time">11:00 قبل از ظهر</span>
    </div>
  )
}

export default Chat
