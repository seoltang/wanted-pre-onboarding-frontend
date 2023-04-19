import styled from 'styled-components';
import { flexCustom } from '@styles/common';

export const Container = styled.div`
  ${flexCustom('column', 'stretch', 'flex-start')}
`;

export const ButtonWrapper = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
  padding: 24px 28px 0;
  width: 100%;
`;

export const ModalWrapper = styled.div<{ isAddFormOpen: boolean }>`
  position: relative;
  display: ${({ isAddFormOpen }) => (isAddFormOpen ? 'block' : 'none')};
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.25);
`;
