import styled from 'styled-components';
import { MiniButton, flexCustom } from '@styles/common';

export const List = styled.li`
  ${flexCustom('row')}
  column-gap: 8px;
  width: 360px;
`;

export const TextInput = styled.input`
  flex: 1 1 0;
  padding: 4px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
`;

export const Button = styled(MiniButton)``;

export const CancelButton = styled(MiniButton)`
  color: ${({ theme }) => theme.color.red.normal};

  &:hover {
    color: ${({ theme }) => theme.color.red.deep};
  }
`;
