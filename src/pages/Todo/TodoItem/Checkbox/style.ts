import styled from 'styled-components';

type CheckboxLabelProps = {
  isCompleted: boolean;
};

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const Wrapper = styled.div`
  padding-top: 1px;
  padding-right: 8px;
`;

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  width: 16px;
  height: 16px;
  background-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.color.accent : 'transparent'};
  border: 2px solid ${({ theme }) => theme.color.accent};
  border-radius: 50%;
  cursor: pointer;
`;
