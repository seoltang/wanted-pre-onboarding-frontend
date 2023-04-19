import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@constants/config';
import * as S from './style';

export type ToDoProps = { toDo: ToDoType };

function ToDo({ toDo }: ToDoProps) {
  const { id, title } = toDo;

  return (
    <S.Wrapper>
      <Link to={`${ROUTE_PATH.toDo}/${id}`}>
        <S.Title>{title}</S.Title>
      </Link>
    </S.Wrapper>
  );
}

export default ToDo;
