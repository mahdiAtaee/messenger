// -------------- import Dependencies -----------------
import { useLayoutEffect } from 'react'
import L from 'leaflet'
import { actionTypes, useShowMapDispatch } from '../../../context/ShowIndexPage'
import { connect } from 'react-redux'

const Map = ({ current, zoom, OnlineUsers, me }) => {
  const dispatch = useShowMapDispatch()
  useLayoutEffect(() => {
    const { lat, lng } = current
    const map = L.map('map').setView([lat, lng], zoom)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    OnlineUsers.forEach((OnlineUser) => {
      if (OnlineUser.user.hash !== me.hash) {
        const [lat, lng] = OnlineUser.location.coordinates
        L.marker([lat, lng]).addTo(map).bindPopup(`<p>${OnlineUser.user.name}</p>`)
      }
    })
    return () => {
      map.remove()
    }
  })

  const ShowUsersList = () => {
    dispatch({
      type: actionTypes.SHOW_USERS_LIST
    })
  }
  return (
    <div className="chat">
      <button className="show-users-list" onClick={() => ShowUsersList()}>
        نمایش لیست کاربران
      </button>
      <div id="map"></div>
    </div>
  )
}

export default connect((state) => ({ me: state.main.me }))(Map)
Map.defaultProps = {
  OnlineUsers: []
}
