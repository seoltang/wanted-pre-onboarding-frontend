import styled from 'styled-components';
import { flexCustom } from '@styles/common';

export const RowWrapper = styled.div`
  ${flexCustom('row')}
  column-gap: 12px;
  width: 360px;
`;

export const AddTodoInput = styled.input`
  flex: 1 1 0;
  padding: 4px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
`;
