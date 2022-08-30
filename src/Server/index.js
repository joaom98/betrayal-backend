import http from 'http';
import express from 'express';
const app = express();
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

app.get('/', (req, res, next) => {
  res.send('lol')
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});