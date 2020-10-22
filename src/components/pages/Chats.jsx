import React from 'react';
import '../../styles/pages/chats.css';

import { Nav } from '../molecules/';
import { ChatsContainer } from '../containers/';
import { Header, AddContact } from '../atoms/';

const Chats = () => {
  return (
    <>
      <Header title="Chats" />
      <ChatsContainer />
      <Nav />
    </>
  );
};

export default Chats;
