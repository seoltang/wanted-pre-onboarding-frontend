import React from 'react';
import { MiniRoundedButton } from '../../../styles/theme';
import type { ModalProps } from '..';

const AddToDoButton = ({ setIsAddFormOpen }: ModalProps) => {
  return (
    <MiniRoundedButton onClick={() => setIsAddFormOpen(true)}>
      <i className="fa-solid fa-plus" />
    </MiniRoundedButton>
  );
};

export default AddToDoButton;
