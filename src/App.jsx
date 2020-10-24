import React from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Register, Login, Chats, Chat } from './components/pages/';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/chats" component={Chats} />
        <Route exact path="/chats/:chatID" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
};
