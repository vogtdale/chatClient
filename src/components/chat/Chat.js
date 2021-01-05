import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../../components/infoBar/InfoBar";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const Endpoint = 'https://chatserverapp.glitch.me/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(Endpoint);

    setName(name);
    setRoom(room);

    // console.log(socket)

    socket.emit("join", { name, room }, () => {});

    return () => {
      // will unmount the component when leaving
      socket.emit("disconnect");

      socket.off();
    };
  }, [Endpoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  //function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="bg-dark min-vh-100 d-flex flex-column justify-content-center align-items-center ">
      <InfoBar room={room} message={message} setMessage={setMessage} sendMessage={sendMessage} messages={messages} name={name} />
    </div>
  );
};

export default Chat;
