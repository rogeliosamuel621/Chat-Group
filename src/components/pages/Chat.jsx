import React from 'react';
import { useParams } from 'react-router-dom';

import { ChatHeader } from '../molecules/';
import { fakeUsers } from '../../utils/fakeUsers';

const Chat = () => {
  const { chatID } = useParams();
  return (
    <>
      <ChatHeader FriendName={fakeUsers[chatID - 1].username} />
    </>
  );
};

export default Chat;
