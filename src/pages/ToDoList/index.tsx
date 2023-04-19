import React, { useState } from 'react';
import LogoutButton from '@components/LogoutButton';
import AddToDoButton from './AddToDoButton';
import AddToDoForm from './AddToDoForm';
import ToDos from './ToDos';
import * as S from './style';

function ToDoList() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  return (
    <S.Container>
      <S.ButtonWrapper>
        <AddToDoButton setIsAddFormOpen={setIsAddFormOpen} />
        <LogoutButton />
      </S.ButtonWrapper>

      <S.ModalWrapper isAddFormOpen={isAddFormOpen}>
        <AddToDoForm setIsAddFormOpen={setIsAddFormOpen} />
        <S.ModalBackground />
      </S.ModalWrapper>

      <ToDos isAddFormOpen={isAddFormOpen} isEditFormOpen={false} />
    </S.Container>
  );
}

export default ToDoList;
