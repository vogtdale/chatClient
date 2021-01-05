import React from "react";
import ScrollToBottom from "react-scroll-to-bottom"
import Message from "../message/Message"
const InfoBar = ({ room, message, setMessage, sendMessage, messages, name }) => (
  <>
    <div
      style={{ height: "95vh" }}
      className="d-flex flex-column justify-content-center w-50"
    >
      <div
        style={{ height: "10%" }}
        className="d-flex flex-row bg-primary justify-content-between text-white"
      >
        <div className="p-3">
          <h3>{room} ChatRoom</h3>
        </div>
        <div className=" p-3 ">
          <a href="/">
            <i className="material-icons text-white">close</i>
          </a>
        </div>
      </div>
      <div
        style={{ height: "80%", backgroundColor: "white" }}
        className="d-flex justify-content-end"
      >
        <ScrollToBottom className="d-flex">
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
      </div>

      <div
        
        className="w-100 d-flex bg-primary "
      >
        <form  className="d-flex flex-row justify-content-between w-100 p-3 ">
          <input
            className="bg-light"
            type="text"
            placeholder="type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          />
          <button className="btn-large deep-purple" onClick={(e) => sendMessage(e)}>Send</button>
        </form>
      </div>
    </div>
  </>
);

export default InfoBar;
