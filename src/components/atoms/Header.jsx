import React from 'react';
import '../../styles/atoms/header.css';

import { Title } from './';

const Header = ({ title }) => {
  return (
    <header className="Header">
      <Title content={title} />
    </header>
  );
};

export default Header;
