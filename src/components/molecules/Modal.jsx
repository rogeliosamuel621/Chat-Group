import React from 'react';
import '../../styles/molecules/modal.css';

const Modal = () => {
  return (
    <div id="Modal" className="Modal">
      <div className="Modal-Content">
        <div className="Modal-Content-Close">
          <a href="#">X</a>
        </div>
        <h1>My modal</h1>
      </div>
    </div>
  );
};

export default Modal;
