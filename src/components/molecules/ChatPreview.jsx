import React from 'react';
import '../../styles/molecules/chatPreview.css';

const ChatPreview = ({ img, username }) => {
  return (
    <article className="ChatPreview">
      <div className="ChatPreview-Content">
        <div className="ChatPreview-ProfilePic">
          <img src={img} alt="profile pic friend" width="40px" height="40px" />
        </div>
        <div>
          <p>{username}</p>
        </div>
      </div>
      <hr />
    </article>
  );
};

export default ChatPreview;
