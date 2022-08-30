
import React from "react";
import "../styling/main.css";
import ChatBar from "./Chat/ChatBar";
import ChatBody from "./Chat/ChatBody";
import ChatFooter from "./Chat/ChatFooter";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <ChatBar />
      <div className="div__chatbody">
        <div className="navbar">
        <p className="hangout">Hangout with colleagues</p>
        <button className="leave_chat">LEAVE CHAT</button>
        </div>
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
