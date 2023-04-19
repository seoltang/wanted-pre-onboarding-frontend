import styled from 'styled-components';
import { flexCustom } from '@styles/common';

type TodoContentProps = {
  isCompleted: boolean;
};

export const List = styled.li`
  ${flexCustom('row', 'flex-start', 'flex-start')}
  column-gap: 8px;
  width: 360px;
`;

export const Label = styled.label`
  ${flexCustom('row', 'flex-start', 'flex-start')}
  margin-top: 3px;
  column-gap: 8px;
  width: 360px;
`;

export const TodoContent = styled.span<TodoContentProps>`
  flex: 1 1 0;
  margin-top: -3px;
  color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.color.gray : theme.color.text};
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  line-height: 1.3rem;
`;
