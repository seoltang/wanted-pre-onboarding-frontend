import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ToDo from './ToDo';
import { flexCustom } from '../../../styles/theme';
import { api } from '../../../config';

export type ToDoType = {
  id: string;
  title: string;
  content: string;
};

const ToDos = ({ isEditFormOpen, isAddFormOpen }: { isEditFormOpen: boolean; isAddFormOpen: boolean }) => {
  const [toDoData, setToDoData] = useState<ToDoType[] | undefined>([]);

  useEffect(() => {
    const getToDos = async () => {
      try {
        const response = await axios.get(api.todos, { headers: { Authorization: localStorage.getItem('token') } });

        if (response.statusText === 'OK') {
          setToDoData(response.data.data);
        }
      } catch (error) {
        alert(error);
      }
    };

    getToDos();
  }, [isEditFormOpen, isAddFormOpen]);

  return (
    <ToDoWrapper>
      {toDoData?.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} />
      ))}
    </ToDoWrapper>
  );
};

const ToDoWrapper = styled.div`
  ${flexCustom('flex-start', 'flex-start', 'column')}
  padding: 32px 32px 0
`;

export default ToDos;
