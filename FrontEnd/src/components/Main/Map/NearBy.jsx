// ----------------- import Dependencies -------------------
import { connect } from 'react-redux'

// ----------------- import components ---------------------
import Map from './Map'
const NearBy = ({ onlineUsers }) => {
  return <Map current={{ lat: 35.689198, lng: 51.388973 }} zoom={15} OnlineUsers={onlineUsers} />
}

export default connect(
  (state) => ({
    onlineUsers: state.main.onlineUsers
  })
)(NearBy)
