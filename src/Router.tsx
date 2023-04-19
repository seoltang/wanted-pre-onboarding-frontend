import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_PATH } from '@constants/config';
import Login from '@pages/auth/Login';
import SignUp from '@pages/auth/SignUp';
import Landing from '@pages/Landing';
import ToDoDetail from '@pages/ToDoDetail';
import ToDoList from '@pages/ToDoList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={ROUTE_PATH.login} element={<Login />} />
        <Route path={ROUTE_PATH.signUp} element={<SignUp />} />
        <Route path={ROUTE_PATH.toDo} element={<ToDoList />}>
          <Route path=":id" element={<ToDoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
