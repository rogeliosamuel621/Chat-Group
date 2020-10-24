import React, { useState } from 'react';
import '../../styles/molecules/typingBar.css';

import Send from '../../img/send.svg';

const TypingBar = () => {
  const [message, setMessage] = useState('');

  function sendMessage(e) {
    e.preventDefault();
  }

  return (
    <div className="TypingBar">
      <form className="TypingBar-Form" onSubmit={sendMessage}>
        <div className="TypingBar-InputText">
          <input
            type="text"
            placeholder="Type your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div onClick={sendMessage} className="TypingBar-InputSubmit">
          <img src={Send} alt="Send button" width="30px" height="30px" />
        </div>
      </form>
    </div>
  );
};

export default TypingBar;
