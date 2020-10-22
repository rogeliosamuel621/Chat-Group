import React from 'react';

const ChatPreview = ({ img, username }) => {
  return (
    <article>
      <div>
        <img src={img} alt="profile pic friend" width="40px" height="40px" />
      </div>
      <div>
        <p>{username}</p>
      </div>
    </article>
  );
};

export default ChatPreview;
