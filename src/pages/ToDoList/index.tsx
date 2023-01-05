import React from 'react';
import LogoutButton from '../../components/LogoutButton';
import useTokenCheck from '../../hooks/useTokenCheck';

const ToDoList = () => {
  useTokenCheck();

  return (
    <div>
      ToDoList
      <LogoutButton />
    </div>
  );
};

export default ToDoList;
