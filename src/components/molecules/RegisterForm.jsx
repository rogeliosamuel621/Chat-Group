import React, { useState } from 'react';
import '../../styles/molecules/registerForm.css';

import { Input, Submit } from '../atoms/';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="RegisterForm">
      <Input label="Email" type="email" onChange={setEmail} value={email} />
      <Input
        label="Username"
        type="text"
        onChange={setUsername}
        value={username}
      />
      <Input
        label="Password"
        type="password"
        onChange={setPassword}
        value={password}
      />
      <Submit value="Create an account" />
    </form>
  );
};

export default RegisterForm;
