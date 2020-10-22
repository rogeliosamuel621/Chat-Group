import React from 'react';
import '../../styles/pages/chats.css';

import { ChatsContainer } from '../containers/';
import { Header } from '../atoms/';

const Chats = () => {
  return (
    <>
      <Header title="Chats" />
      <ChatsContainer />
    </>
  );
};

export default Chats;
