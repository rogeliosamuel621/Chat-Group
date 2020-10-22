import React from 'react';
import '../../styles/atoms/addContact.css';

import Add from '../../img/ADD.svg';

const AddContact = () => {
  function showModal() {
    console.log('working');
  }
  return (
    <a href="#Modal" className="AddContact" onClick={showModal}>
      <img src={Add} alt="Add icon" width="40px" height="40px" />
    </a>
  );
};

export default AddContact;
