import React, { useState } from 'react';
import '../../styles/containers/chatContainer.css';

import { Message, MyMessage, TypingBar } from '../molecules/';
import { fakeMessages } from '../../utils/fakeMessages';

const ChatContainer = () => {
  const [messages, setMessages] = useState(fakeMessages);
  return (
    <main className="ChatContainer">
      <section className="ChatContainer-Messages">
        {messages.map((message, index) => {
          return message.ID === 1 ? (
            <MyMessage
              key={index}
              messageContent={message.message}
              username={message.username}
            />
          ) : (
            <Message
              key={index}
              username={message.username}
              messageContent={message.message}
            />
          );
        })}
      </section>
      <TypingBar />
    </main>
  );
};

export default ChatContainer;
