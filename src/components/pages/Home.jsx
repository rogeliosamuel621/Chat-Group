import React from 'react';
import '../../styles/pages/home.css';

import { HomeNav } from '../molecules/';
import { SimpleP } from '../atoms/';
import HomeIllustration from '../../img/homeIllustration.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomeNav />
      <main className="Home-Main">
        <div className="Home-Illustration-Container">
          <img
            src={HomeIllustration}
            alt="Home illustration"
            width="198px"
            height="188px"
          />
        </div>
        <div className="Home-Description">
          <SimpleP
            content="A chat application where you can add
                     friends and chat with them"
          />
          <Link to="/register">Register</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
