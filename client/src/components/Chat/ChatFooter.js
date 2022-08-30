import React from 'react'

const ChatFooter = () => {
  return (
    <div className='chatfooter'>
      <input type="text" placeholder='Write message' className='chat_input' />
      <button className='chatsend'>SEND</button>
    </div>
  )
}

export default ChatFooter