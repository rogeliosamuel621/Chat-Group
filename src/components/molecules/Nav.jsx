import React from 'react';
import '../../styles/molecules/nav.css';

import ChatIcon from '../../img/chat.svg';
import UserIcon from '../../img/user.svg';
import SettingsIcon from '../../img/settings.svg';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/chat">
        <img src={ChatIcon} alt="Chat icon" width="30px" height="30px" />
      </Link>
      <Link to="/profile">
        <img src={UserIcon} alt="User icon" width="30px" height="30px" />
      </Link>
      <Link to="/settings">
        <img
          src={SettingsIcon}
          alt="Settings icon"
          width="30px"
          height="30px"
        />
      </Link>
    </nav>
  );
};

export default Nav;
