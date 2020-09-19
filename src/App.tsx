import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { TodoListPage } from './todo/views/TodoListPage';
import { SignInPage } from './user/views/SignInPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/sign-in">
        <SignInPage />
      </Route>
      <Route path="/todo-lists">
        <TodoListPage />
      </Route>
      <Redirect to="/sign-in" />
    </BrowserRouter>
  );
};
