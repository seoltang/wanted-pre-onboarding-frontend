import styled from 'styled-components';
import { flexCustom } from '@styles/common';

export const Container = styled.div`
  position: relative;
  ${flexCustom('row', 'stretch', 'space-between')}
  min-height: 100vh;

  & > * {
    flex: 1 1 0;
  }
`;

export const DetailWrapper = styled.div`
  background-color: rgb(255 255 255 / 0.5);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
`;

export const ButtonWrapper = styled.div`
  ${flexCustom('row', 'center', 'space-between')}
  margin: 16px 16px 0;
`;

export const RightSideBtnWrapper = styled.div`
  ${flexCustom('row', 'center', 'space-between')}

  & button {
    margin-right: 16px;
  }
`;

export const TextWrapper = styled.div`
  padding: 20px 32px 0;
`;

export const Title = styled.h3`
  padding-bottom: 24px;
  font-size: 28px;
  line-height: 1.2;
`;

export const Content = styled.pre`
  color: gray;
  line-height: 1.5;
`;

export const ModalWrapper = styled.div<{ isAddFormOpen: boolean }>`
  position: absolute;
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
