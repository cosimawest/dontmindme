const http = require("http");
const app = require("./app");
const port = process.env.PORT || 8001;
const server = http.createServer(app);
/**
 * Socket.io
 */
 var socketApi = require('./socketApi');
 var io = socketApi.io;
 io.attach(server);
 io.set('origins', '*:*');
server.listen(port, "0.0.0.0", () => {
  console.log(`server running at port: ${port} {Bookmarkd Backend}`);
});
