const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server);

const users = [];

let isPlaying = false;

app.use(express.static(path.join(__dirname, "../client")));

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  socket.on("user-enter", (data) => {
    if (!isPlaying) {
      users.push(data);

      io.emit("update-users", users);
    } else {
      io.to(data.id).emit("access-denied", {
        message: "게임이 이미 시작되었습니다.",
      });
    }
  });

  socket.on("user-chatting", (data) => {
    io.emit("user-chatting", data);
  });
});

server.listen(PORT, () => console.log(`abc ${PORT}`));
