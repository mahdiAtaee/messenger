const PeerServer = require("peer").PeerServer;
const ClientManager = require('./messenger/ClientManager')
const server = new PeerServer({
  port: process.env.PEER_PORT,
  path: "/messenger",
});


const startPeerServer = () => {
  new ClientManager(server)
};

module.exports = startPeerServer;
