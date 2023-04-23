// ------------------ import dependencies ------------------
import { useDarkModeContext } from '../../../context/DarkModeContext'
import { useShowChatBoxContext } from '../../../context/ShowChatContext'

// ------------------ import components ------------------
import Chat from './Chat'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'

const Index = () => {
  const { dark } = useDarkModeContext()
  const { showChatBox } = useShowChatBoxContext()
  const isShow = showChatBox === false ? 'none' : 'block'

  
  return (
    <div
      className={dark ? 'tab-content chat-box dark' : 'tab-content chat-box'}
      id="myTabContent"
      style={{ display: isShow }}>
      <div
        className="tab-pane fade"
        id="user-one"
        role="tabpanel"
        aria-labelledby="user-one-tab">
        <ChatHeader username="مهدی عطایی" />
        <div className="chat-wrapper">
          <Chat type="receive" />
          <Chat type="send" />
          <Chat type="send" />
        </div>
        <ChatFooter />
      </div>
      <div className="tab-pane fade " id="user-two" role="tabpanel" aria-labelledby="user-two-tab">
        <ChatHeader username="علی ایمانی" />
        <div className="chat-wrapper">
          <Chat type="receive" />
          <Chat type="send" />
          <Chat type="send" />
        </div>
        <ChatFooter />
      </div>
      <div
        className="tab-pane fade "
        id="user-three"
        role="tabpanel"
        aria-labelledby="user-three-tab">
        <ChatHeader username="ایمان علوی" />
        <div className="chat-wrapper">
          <Chat type="receive" />
          <Chat type="send" />
          <Chat type="send" />
        </div>
        <ChatFooter />
      </div>
      <div
        className="tab-pane fade "
        id="user-four"
        role="tabpanel"
        aria-labelledby="user-four-tab">
        <ChatHeader username="حسین رضوی" />
        <div className="chat-wrapper">
          <Chat type="receive" />
          <Chat type="send" />
          <Chat type="send" />
        </div>
        <ChatFooter />
      </div>
      <div
        className="tab-pane fade "
        id="user-five"
        role="tabpanel"
        aria-labelledby="user-five-tab">
        <ChatHeader username="علی روستایی" />
        <div className="chat-wrapper">
          <Chat type="receive" />
          <Chat type="send" />
          <Chat type="send" />
        </div>
        <ChatFooter />
      </div>
    </div>
  )
}

export default Index
