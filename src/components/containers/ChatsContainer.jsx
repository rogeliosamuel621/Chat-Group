import React, { useState } from 'react';
import '../../styles/containers/chatsContainer.css';

import { AddContact } from '../atoms/';
import { ChatPreview, Modal } from '../molecules/';
import { fakeUsers } from '../../utils/fakeUsers';

const ChatContainer = () => {
  const [chats, setChats] = useState(fakeUsers);
  return (
    <main className="ChatsContainer">
      <div className="ChatsContainer-Content">
        {chats.map((user, index) => {
          return (
            <ChatPreview
              key={user.ID}
              ID={user.ID}
              img={user.img}
              username={user.username}
            />
          );
        })}
      </div>
      <AddContact />
      <Modal />
    </main>
  );
};

export default ChatContainer;
