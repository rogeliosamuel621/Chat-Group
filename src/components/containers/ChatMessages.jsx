import React, { useState, useEffect } from 'react';
import '../../styles/containers/chatMessages.css';
import socket from '../atoms/Socket';

import { Message } from '../molecules/';
import { fakeMessages } from '../../utils/fakeMessages';

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });
    return () => socket.off();
  });

  return (
    <section className="ChatMessages">
      {messages.map((message, index) => {
        return (
          <Message key={index} username={'temporal'} messageContent={message} />
        );
      })}
    </section>
  );
};

export default ChatMessages;
