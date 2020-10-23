import React, { useState } from 'react';
import '../../styles/molecules/modal.css';

import { Input, Submit } from '../atoms/';

const Modal = () => {
  const [email, setEmail] = useState('');

  return (
    <div id="Modal" className="Modal">
      <div className="Modal-Content">
        <div className="Modal-Content-Close">
          <a href="#">X</a>
        </div>
        <h1>Add a contact</h1>
        <form>
          <Input label="Email" type="email" onChange={setEmail} value={email} />
          <Submit value="Add contact" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
