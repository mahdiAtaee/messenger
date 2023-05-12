// -------------- import Dependencies -----------------
import { useLayoutEffect } from 'react'
import L from 'leaflet'

const Map = ({ current, zoom, OnlineUsers }) => {
  useLayoutEffect(() => {
    const { lat, lng } = current
    const map = L.map('map').setView([lat, lng], zoom)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    OnlineUsers.forEach((OnlineUser) => {
      const [lat, lng] = OnlineUser.location.coordinates
      L.marker([lat, lng]).addTo(map).bindPopup(`<p>${OnlineUser.user.name}</p>`)
    })
    return () => {
      map.remove()
    }
  })
  return (
    <div className="chat">
      <div id="map"></div>
    </div>
  )
}

export default Map
Map.defaultProps = {
  OnlineUsers: []
}
