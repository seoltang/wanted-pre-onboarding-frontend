import React, { useState } from 'react';
import createTodo from '@utils/todo/createTodo';
import { MiniRoundedButton } from '@styles/common';
import * as S from './style';

type AddTodoFormProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function AddTodoForm({ setTodos }: AddTodoFormProps) {
  const [newTodo, setNewTodo] = useState('');

  const onInput = (event: React.FormEvent<HTMLInputElement>) =>
    setNewTodo(event.currentTarget.value);

  const addNewTodo = (todo: TodoType) => {
    setTodos((prev) => [...prev, todo]);
    setNewTodo('');
  };

  return (
    <S.RowWrapper>
      <S.AddTodoInput
        type="text"
        onInput={onInput}
        value={newTodo}
        placeholder="새로운 할 일..."
        data-testid="new-todo-input"
      />
      <MiniRoundedButton
        onClick={() => createTodo(newTodo, addNewTodo)}
        data-testid="new-todo-add-button"
      >
        <i className="fa-solid fa-plus" />
      </MiniRoundedButton>
    </S.RowWrapper>
  );
}

export default AddTodoForm;
