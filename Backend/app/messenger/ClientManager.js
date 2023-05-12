class ClientManager {
  constructor(peer) {
    this.peer = peer;
    this.peer.on("connection", this.connectionHandler);
  }
  connectionHandler(client) {
    console.log(`${client.id} connected!`);
  }
}
module.exports = ClientManager;
