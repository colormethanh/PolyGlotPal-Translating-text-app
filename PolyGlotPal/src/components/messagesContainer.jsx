import { useState, createRef, useEffect, useLayoutEffect } from 'react'
import './messagesContainer.css'
import Message from './message.jsx'

function MessagesContainer(props){

  const lastMessageRef = createRef(null)

  
  // todo: Look up useLayoutEffect!!
  // Solution thanks to: https://stackoverflow.com/a/73094341/17679324
  useLayoutEffect(() => {
    setTimeout(function(){
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;
      }
    }, 10)
  }, [props.messages])
  //

  return (
    <div id='messages-container' ref={lastMessageRef}>
      {props.messages.map((message, i) => {
        return <Message message={message} key={i} />
      }) }
    </div>
  )
}

export default MessagesContainer