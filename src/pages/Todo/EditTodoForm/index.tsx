import React, { useState } from 'react';
import updateTodo from '@utils/todo/updateTodo';
import * as S from './style';
import Checkbox from '../TodoItem/Checkbox';

type EditTodoFormProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setIsEditModeOn: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditTodoForm({
  id,
  todo,
  isCompleted,
  setTodos,
  setIsEditModeOn,
}: EditTodoFormProps) {
  const [todoValue, setTodoValue] = useState(todo);

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  const submit = async () => {
    const updatedTodo = await updateTodo(id, {
      todo: todoValue,
      isCompleted,
    });

    const updateTodos = (todos: TodoType[]) => {
      const index = todos.findIndex((prevTodo) => prevTodo.id === id);
      todos.splice(index, 1, updatedTodo);
      return [...todos];
    };

    setTodos(updateTodos);
    setIsEditModeOn(false);
  };

  const cancel = () => {
    if (window.confirm('수정한 내용이 사라집니다. 계속하시겠습니까?')) {
      setTodoValue(todo);
      setIsEditModeOn(false);
    }
  };

  return (
    <S.List>
      <Checkbox
        id={id}
        todo={todo}
        isCompleted={isCompleted}
        setTodos={setTodos}
      />
      <S.TextInput
        type="text"
        value={todoValue}
        onInput={onInput}
        data-testid="modify-input"
      />

      <S.Button onClick={submit} data-testid="submit-button">
        <i className="fa-solid fa-check" />
      </S.Button>

      <S.CancelButton onClick={cancel} data-testid="cancel-button">
        <i className="fa-solid fa-xmark" />
      </S.CancelButton>
    </S.List>
  );
}

export default EditTodoForm;
