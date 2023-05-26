// -------------- import dependecies ----------------
import { connect } from 'react-redux'

// -------------- import components -----------------
import Chat from './Chat'

function ChatContent({ me, messages }) {
  const renderMessages = messages.map((message, index) => {
    return message.sender !== me.hash ? (
      <Chat key={index} {...message} type="receive" />
    ) : (
      <Chat key={index} {...message} type="send" />
    )
  })
  return <div className="chat-wrapper">{renderMessages}</div>
}

export default connect((state) => ({
  me: state.main.me,
  messages: state.chat.currentChatMessage
}))(ChatContent)
