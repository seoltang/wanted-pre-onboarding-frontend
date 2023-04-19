import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.li`
  line-height: 1.2;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    transition: all 0.2s linear;
  }
`;
