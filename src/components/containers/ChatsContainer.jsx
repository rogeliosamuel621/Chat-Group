import React from 'react';
import '../../styles/containers/chatsContainer.css';

import { ChatPreview } from '../molecules/';

const ChatContainer = () => {
  return (
    <main className="ChatsContainer">
      <ChatPreview
        img="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602633373/mmoccv9jgmkjls642tfa.jpg"
        username="Alan"
      />
      <ChatPreview
        img="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359377/rwgi2xs3x8m1bjaq1z2d.jpg"
        username="Rogelio"
      />
    </main>
  );
};

export default ChatContainer;
