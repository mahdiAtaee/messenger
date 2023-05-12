// ----------------- import Dependencies -------------------
import { connect } from 'react-redux'

// ----------------- import components ---------------------
import Map from './Map'
const NearBy = ({ OnlineUsers }) => {
  return <Map current={{ lat: 35.689198, lng: 51.388973 }} zoom={15} OnlineUsers={OnlineUsers} />
}

export default connect(
  (state) => ({
    OnlineUsers: state.main.OnlineUsers
  }),
  (dispatch) => ({})
)(NearBy)
