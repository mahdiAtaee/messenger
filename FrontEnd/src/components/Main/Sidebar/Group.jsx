// ---------------------- import dependencies -------------------
import { useDarkModeContext } from '../../../context/DarkModeContext'
import { connect } from 'react-redux'

// ---------------------- import components ------------------
import RecentChat from './RecentChats/RecentChatItem'
import NoRecentChat from './RecentChats/NoRecentChat'

// ---------------------- import assets --------------------
import Magnifier from '../../../Assets/img/magnifier.png'

const Group = ({recentChats}) => {
  const { dark } = useDarkModeContext()
  const hasRecentChat = recentChat.length > 0
  const renderRecentChats = recentChats.map(recentChat => <RecentChat key={recentChat._id} recentChat={recentChat} />)

  return (
    <div className={dark ? 'contact-warpper dark' : 'contact-warpper light'}>
      <div className="header">
        <div className="page-title">چت های اخیر</div>
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
         {hasRecentChat && renderRecentChats}
         {!hasRecentChat && <NoRecentChat/>}
        </ul>
      </div>
    </div>
  )
}

export default connect((state) => ({
  recentChats: state.main.recentChat
}))(Group)
