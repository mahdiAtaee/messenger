import Sidebar from '../components/Sidebar'
import Contact from '../components/Contact'
import Header from '../components/Chat-Header'
import Chat from '../components/Chat'
import Settings from '../components/Settings'
import Group from '../components/Group'
import LocationService from '../../Services/LocationService'
function ChatRoom() {
  const locationService = new LocationService()
  locationService.getUserLocation()
    .then((coords) => console.log(coords))
    .catch((error) => console.log(error))
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
