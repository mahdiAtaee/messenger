require("dotenv").config();

const startApp = require("./app");
const startSocketServer = require("./app/sockServer");

startApp();
startSocketServer();
