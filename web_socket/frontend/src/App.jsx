import React, { useEffect, useState } from "react";

const App = () => {
  const [ws, setWs] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("connect to websocket server");
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
      console.log(setMessages, "setmesssage");
    };

    socket.onclose = () => {
      console.log("Websocket disconnected ");
    };
    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    console.log(ws && input, ".....");
    if (ws && input) {
      console.log(input, "input inside");
      ws.send(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>WebSocket frontend</h1>
      <input
        type="text"
        placeholder="type message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <h3>Messsage:-</h3>
     <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
