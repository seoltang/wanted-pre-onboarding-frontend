import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/user/Login';
import SignUp from './pages/user/SignUp';
import ToDoList from './pages/ToDoList';
import ToDoDetail from './pages/ToDoDetail';
import { PATH } from './config';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={PATH.login} element={<Login />} />
        <Route path={PATH.signUp} element={<SignUp />} />
        <Route path={PATH.toDo} element={<ToDoList />} />
        <Route path={`${PATH.toDo}/:id`} element={<ToDoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
