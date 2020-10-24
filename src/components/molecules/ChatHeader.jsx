import React from 'react';
import '../../styles/molecules/chatHeader.css';

import BackIcon from '../../img/back.svg';
import OptionsIcon from '../../img/options.svg';
import { Link } from 'react-router-dom';

const ChatHeader = ({ FriendName }) => {
  return (
    <header className="ChatHeader">
      <Link to="/chats" className="ChatHeader-Back">
        <img width="30px" height="30px" src={BackIcon} alt="Back icon" />
      </Link>
      <div className="ChatHeader-FriendName">
        <h1>{FriendName}</h1>
      </div>
      <div className="ChatHeader-Option">
        <img width="30px" height="30px" src={OptionsIcon} alt="Options icon" />
      </div>
    </header>
  );
};

export default ChatHeader;
