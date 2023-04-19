import React, { useEffect, useState } from 'react';
import getTodos from '@utils/todo/getTodos';
import useRedirectToLogin from '@hooks/useRedirectToLogin';
import LogoutButton from '@components/LogoutButton';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import * as S from './style';

function Todo() {
  useRedirectToLogin();

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <S.Container>
      <LogoutButton />

      {isLoading ? (
        <S.Loading>로딩 중...</S.Loading>
      ) : (
        <>
          <AddTodoForm setTodos={setTodos} />

          <S.TodosWrapper>
            {todos.length ? (
              todos.map(({ id, todo, isCompleted }) => (
                <TodoItem
                  key={`todo-${id}`}
                  id={id}
                  todo={todo}
                  isCompleted={isCompleted}
                  setTodos={setTodos}
                />
              ))
            ) : (
              <S.EmptyMessage>
                아직 해야 할 일이 없어요!
                <br />
                새로운 할 일을 추가해 보세요.
              </S.EmptyMessage>
            )}
          </S.TodosWrapper>
        </>
      )}
    </S.Container>
  );
}

export default Todo;
