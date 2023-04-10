import Peer from 'peerjs'
import ClientService from './ClientService'

class MessageService {
  constructor() {
    this.client = new ClientService()
    this.peer = new Peer(this.client.getClientID(), {
      port: 9000,
      path: '/messenger',
      host: '/'
    })
    this.connection = null
  }
  connect(clientID) {
    this.connection = this.peer.connect(clientID)
  }
}

export default MessageService
