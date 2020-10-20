import React from 'react';
import '../../styles/molecules/homeNav.css';

import { PurpleText } from '../atoms';

const HomeNav = () => {
  return (
    <nav className="HomeNav">
      <div>
        <h1>Chat group</h1>
      </div>
      <div>
        <PurpleText content="Login" url="/login" />
      </div>
    </nav>
  );
};

export default HomeNav;
