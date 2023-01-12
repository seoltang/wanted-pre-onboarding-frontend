import React, { useState } from 'react';
import styled from 'styled-components';
import ToDos from './ToDos';
import LogoutButton from '../../components/LogoutButton';
import AddToDoButton from './AddToDoButton';
import AddToDoForm from './AddToDoForm';
import useTokenCheck from '../../hooks/useTokenCheck';
import { flexCustom } from '../../styles/theme';

const ToDoList = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  useTokenCheck();

  return (
    <Container>
      <ButtonWrapper>
        <AddToDoButton setIsAddFormOpen={setIsAddFormOpen} />
        <LogoutButton />
      </ButtonWrapper>

      <ModalWrapper isAddFormOpen={isAddFormOpen}>
        <AddToDoForm setIsAddFormOpen={setIsAddFormOpen} />
        <ModalBackground />
      </ModalWrapper>

      <ToDos isAddFormOpen={isAddFormOpen} isEditFormOpen={false} />
    </Container>
  );
};

const Container = styled.div`
  ${flexCustom('stretch', 'flex-start', 'column')}
`;

const ButtonWrapper = styled.div`
  ${flexCustom('center', 'space-between')}
  padding: 24px 28px 0;
  width: 100%;
`;

const ModalWrapper = styled.div<{ isAddFormOpen: boolean }>`
  position: relative;
  display: ${({ isAddFormOpen }) => (isAddFormOpen ? 'block' : 'none')};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.25);
`;

export default ToDoList;
