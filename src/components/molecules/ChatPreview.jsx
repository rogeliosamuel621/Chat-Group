import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/molecules/chatPreview.css';

const ChatPreview = ({ img, username, ID }) => {
  return (
    <article className="ChatPreview">
      <Link to={`/chats/${ID}`} className="ChatPreview-Content">
        <div className="ChatPreview-ProfilePic">
          <img src={img} alt="profile pic friend" width="40px" height="40px" />
        </div>
        <div>
          <p>{username}</p>
        </div>
      </Link>
      <hr />
    </article>
  );
};

export default ChatPreview;
