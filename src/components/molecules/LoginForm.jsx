import React, { useState } from 'react';

import { Input, Submit } from '../atoms/';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="RegisterForm">
      <Input label="Email" type="email" onChange={setEmail} value={email} />
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

export default LoginForm;
