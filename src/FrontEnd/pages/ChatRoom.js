import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'
import Header from '../components/Chat-Header'
import Chat from '../components/Chat'
import Settings from '../components/Settings'
import Group from '../components/Group'
function ChatRoom() {
  return (
    <>
      <Sidebar />
      <Contact />
      {/* <Settings /> */}
      {/* <Group /> */}
      <Header />
      <Chat />
    </>
  )
}

export default ChatRoom
