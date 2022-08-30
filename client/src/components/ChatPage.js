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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        itaque molestias deleniti temporibus voluptatibus, dolorem atque odit
        alias ipsam similique, odio facilis quasi recusandae nihil, explicabo
        quis optio sunt exercitationem.
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ChatPage;
