const Chat = ({ type, body, created_at }) => {
  return (
    <div className={`message ${type}`}>
      <div className="chat-content-wrapper">
        <span className="text-message">{body}</span>
        <span className="time">{`${new Date(created_at).toLocaleDateString('fa-IR')} ${new Date(
          created_at
        ).toLocaleTimeString('fa-IR')}`}</span>
      </div>
    </div>
  )
}

export default Chat
