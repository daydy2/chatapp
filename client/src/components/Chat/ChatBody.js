import React from 'react';
import '../../styling/main.css'

const ChatBody = () => {
  return (
    <div className="chatBody">
      <div>
        <div className='personal_chat'>
          <p className='personal'>You</p>
          <p className='personal_words'>How are you doing?</p>
        </div>
        <div className='user_chat'>
          <p className='personal'>Daniel</p>
          <p className='user_words'>How are you doing?</p>
        </div>
      </div>
      <p className='guestuser'>Someone is typing...</p>
    </div>
  )
}

export default ChatBody