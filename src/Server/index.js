import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

// const io = new Server(httpServer, {
//   // options
// });

// io.on("connection", (socket) => {
//   // ...
// });

server.listen(3000);