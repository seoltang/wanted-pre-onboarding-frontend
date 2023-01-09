import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { ToDoType } from '..';
import { PATH } from '../../../../config';
import theme from '../../../../styles/theme';

export type ToDoProps = { toDo: ToDoType };

const ToDo = ({ toDo }: ToDoProps) => {
  const { id, title } = toDo;

  return (
    <Wrapper>
      <Link to={`${PATH.toDo}/${id}`}>
        <Title>{title}</Title>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.li`
  line-height: 1.2;

  &:hover {
    color: ${theme.accentColor};
    transition: all 0.2s linear;
  }
`;

export default ToDo;
