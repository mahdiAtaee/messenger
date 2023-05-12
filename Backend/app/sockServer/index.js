const http = require("http");
const sockjs = require("sockjs");

const sockServer = sockjs.createServer({
  sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js",
});
require("./messenger")(sockServer);
const httpServer = http.createServer();
module.exports = () => {
  sockServer.installHandlers(httpServer, { prefix: "/messenger" });
  httpServer.listen(process.env.SOCK_PORT,'0.0.0.0')
};
