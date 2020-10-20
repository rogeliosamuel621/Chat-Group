import React from 'react';
import '../../styles/containers/registerContainer.css';

import { RegisterForm } from '../molecules/';

const RegisterContainer = () => {
  return (
    <main className="RegisterContainer">
      <h1 className="RegisterContainer-h1">Create an account</h1>
      <RegisterForm />
    </main>
  );
};

export default RegisterContainer;
