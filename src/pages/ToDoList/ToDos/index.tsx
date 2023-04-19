import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AUTHORIZATION_KEY, ACCESS_TOKEN_KEY, API } from '@constants/config';
import ToDo from './ToDo';
import * as S from './style';

function ToDos({
  isEditFormOpen,
  isAddFormOpen,
}: {
  isEditFormOpen: boolean;
  isAddFormOpen: boolean;
}) {
  const [toDoData, setToDoData] = useState<ToDoType[] | undefined>([]);

  useEffect(() => {
    const getToDos = async () => {
      try {
        const response = await axios.get(API.todos, {
          headers: {
            [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY),
          },
        });

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
    <S.ToDoWrapper>
      {toDoData?.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} />
      ))}
    </S.ToDoWrapper>
  );
}

export default ToDos;
