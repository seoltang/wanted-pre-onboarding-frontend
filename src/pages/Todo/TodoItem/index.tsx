import React, { useState } from 'react';
import Checkbox from './Checkbox';
import * as S from './style';
import DeleteTodoButton from '../DeleteTodoButton';
import EditTodoButton from '../EditTodoButton';
import EditTodoForm from '../EditTodoForm';

type TodoItemProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoItem({ id, todo, isCompleted, setTodos }: TodoItemProps) {
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  return isEditModeOn ? (
    <EditTodoForm
      id={id}
      todo={todo}
      isCompleted={isCompleted}
      setTodos={setTodos}
      setIsEditModeOn={setIsEditModeOn}
    />
  ) : (
    <S.List>
      <S.Label>
        <Checkbox
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          setTodos={setTodos}
        />
        <S.TodoContent isCompleted={isCompleted}>{todo}</S.TodoContent>
      </S.Label>

      <EditTodoButton setIsEditModeOn={setIsEditModeOn} />
      <DeleteTodoButton id={id} setTodos={setTodos} />
    </S.List>
  );
}

export default TodoItem;
