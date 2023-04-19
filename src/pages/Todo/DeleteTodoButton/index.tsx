import React from 'react';
import deleteTodo from '@utils/todo/deleteTodo';
import * as S from './style';

type DeleteTodoButtonProps = {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function DeleteTodoButton({ id, setTodos }: DeleteTodoButtonProps) {
  return (
    <S.Button
      onClick={() => deleteTodo(id, setTodos)}
      data-testid="delete-button"
    >
      <i className="fa-solid fa-trash" />
    </S.Button>
  );
}

export default DeleteTodoButton;
