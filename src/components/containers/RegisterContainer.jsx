import React from 'react';
import '../../styles/containers/Container.css';

import { RegisterForm } from '../molecules/';

const RegisterContainer = () => {
  return (
    <main className="Container">
      <h1 className="Container-h1">Create an account</h1>
      <RegisterForm />
    </main>
  );
};

export default RegisterContainer;
