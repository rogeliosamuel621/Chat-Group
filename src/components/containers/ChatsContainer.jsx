import React, { useState } from 'react';
import '../../styles/containers/chatsContainer.css';

import { ChatPreview, Nav } from '../molecules/';
import { fakeUsers } from '../../utils/fakeUsers';

const ChatContainer = () => {
  const [chats, setChats] = useState(fakeUsers);
  return (
    <main className="ChatsContainer">
      <div className="ChatsContainer-Content">
        {chats.map((user, index) => {
          return (
            <ChatPreview key={index} img={user.img} username={user.username} />
          );
        })}
      </div>
      <Nav />
    </main>
  );
};

export default ChatContainer;
