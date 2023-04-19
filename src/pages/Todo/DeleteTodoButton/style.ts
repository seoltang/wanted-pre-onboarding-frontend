import styled from 'styled-components';
import { MiniButton } from '@styles/common';

export const Button = styled(MiniButton)`
  color: ${({ theme }) => theme.color.red.normal};

  &:hover {
    color: ${({ theme }) => theme.color.red.deep};
  }
`;
