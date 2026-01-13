const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data) => {
    //msg send to all connected clients

    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
    //socket.send(`Echo: ${data}`);  vvvvvvvvvvvvv
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket running at ws://localhost:8080");
