import React from 'react';
import { TbMessage } from 'react-icons/tb';
import '../../styling/main.css';

const ChatBar = () => {
  return (
    <div className="chatBar__sidebar">
      <h2 className="div__h2-chatBarHeader">
        <TbMessage size={42} className='icons-mess'/>
        Open Chat
      </h2>
      <section className="section-activeUsers">
        <h4 className="section__h4-chatBarHeader">
          Active users
        </h4>
        <div className="section__div-userList">
          <p>user 1</p>
          <p>user 1</p>
          <p>user 1</p>
          <p>user 1</p>
        </div>
      </section>
    </div>
  )
}

export default ChatBar