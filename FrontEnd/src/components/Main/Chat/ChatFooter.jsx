// --------------- import dependecies -----------------
import ChatContext from '../../../context/ChatContext';
import { useContext } from 'react';

const ChatFooter = () => {
  const { eventManager } = useContext(ChatContext);
    const handleSendMessage = (e) => {
        e.preventDefault();
        const textMessage = document.querySelector('#sendMessage');
        if (textMessage !== "") {
            eventManager.fire('message', {
                body: textMessage.value
            });
            textMessage.value = "";
        }
    };
  return (
    <div className="chat-footer">
      <form>
        <input type="text" id="sendMessage" autoComplete='off' placeholder="پیام خود را بنویسید ..." />
        <button
          onClick={(e) => {
            handleSendMessage(e)
          }}
          type="submit"
          className="send">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="eva eva-paper-plane">
            <g data-name="Layer 2">
              <g data-name="paper-plane">
                <rect width="24" height="24" opacity="0"></rect>
                <path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"></path>
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default ChatFooter
