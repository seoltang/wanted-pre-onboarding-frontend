import styled from 'styled-components';
import { flexCustom } from '@styles/common';

export const Loading = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  ${flexCustom('column')}
  row-gap: 20px;
  margin: 20px;
`;

export const TodosWrapper = styled.ul`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  row-gap: 12px;
`;

export const EmptyMessage = styled.div`
  color: ${({ theme }) => theme.color.gray};
  text-align: center;
  font-size: 14px;
  line-height: 1.8em;
`;
