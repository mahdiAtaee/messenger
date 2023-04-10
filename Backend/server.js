require("dotenv").config();

const startApp = require("./app");
const startPeerServer = require("./app/peer");

startApp();
startPeerServer();
