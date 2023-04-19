import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_PATH } from '@constants/config';
import Login from '@pages/auth/Login';
import SignUp from '@pages/auth/SignUp';
import Landing from '@pages/Landing';
import Todo from '@pages/Todo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={ROUTE_PATH.login} element={<Login />} />
        <Route path={ROUTE_PATH.signUp} element={<SignUp />} />
        <Route path={ROUTE_PATH.todo} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
