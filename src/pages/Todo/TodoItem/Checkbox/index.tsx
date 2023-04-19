import React from 'react';
import updateTodo from '@utils/todo/updateTodo';
import * as S from './style';

type CheckboxProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function Checkbox({ id, todo, isCompleted, setTodos }: CheckboxProps) {
  const toggleCheck = async (event: React.FormEvent<HTMLInputElement>) => {
    const updatedTodo = await updateTodo(id, {
      todo,
      isCompleted: event.currentTarget.checked,
    });

    const updateTodos = (todos: TodoType[]) => {
      const index = todos.findIndex((prevTodo) => prevTodo.id === id);
      todos.splice(index, 1, updatedTodo);
      return [...todos];
    };

    setTodos(updateTodos);
  };

  return (
    <S.CheckboxLabel isCompleted={isCompleted}>
      <S.HiddenCheckbox
        type="checkbox"
        defaultChecked={isCompleted}
        onInput={toggleCheck}
      />
    </S.CheckboxLabel>
  );
}

export default Checkbox;
