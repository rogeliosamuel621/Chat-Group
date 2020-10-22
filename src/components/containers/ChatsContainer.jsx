import React, { useState } from 'react';
import '../../styles/containers/chatsContainer.css';

import { AddContact } from '../atoms/';
import { ChatPreview } from '../molecules/';
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
      <AddContact />
    </main>
  );
};

export default ChatContainer;
