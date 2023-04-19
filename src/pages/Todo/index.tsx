import React, { Suspense, lazy, useState } from 'react';
import getTodos from '@utils/todo/getTodos';
import LogoutButton from '@components/LogoutButton';
import AddTodoForm from './AddTodoForm';
import * as S from './style';

const TodoItem = lazy(() => import('./TodoItem'));

const resource = getTodos();

function Todo() {
  const [todos, setTodos] = useState(resource.read());

  return (
    <S.Container>
      <LogoutButton />

      <Suspense fallback={<S.Loading>로딩 중...</S.Loading>}>
        <AddTodoForm setTodos={setTodos} />

        <S.TodosWrapper>
          {todos.map(({ id, todo, isCompleted }) => (
            <TodoItem
              key={`todo-${id}`}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              setTodos={setTodos}
            />
          ))}
        </S.TodosWrapper>
      </Suspense>
    </S.Container>
  );
}

export default Todo;
