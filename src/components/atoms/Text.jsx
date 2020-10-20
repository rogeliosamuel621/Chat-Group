import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/atoms/text.css';

const Title = ({ content }) => {
  return <h1 className="Title">{content}</h1>;
};

const PurpleText = ({ content, url }) => {
  return (
    <Link to={url} className="PurpleText">
      {content}
    </Link>
  );
};

const SimpleP = ({ content }) => {
  return <p className="SimpleP">{content}</p>;
};

const MessageText = ({ content }) => {
  return <p className="MessageText">{content}</p>;
};

const UserMessageName = ({ name }) => {
  return <p className="UserMessageName">{name}</p>;
};

export { Title, MessageText, UserMessageName, PurpleText, SimpleP };
