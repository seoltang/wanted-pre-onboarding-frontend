import React from 'react';
import { MiniRoundedButton } from '../../../styles/theme';
import type { AddModalProps } from '../../../types/modal';

const AddToDoButton = ({ setIsAddFormOpen }: AddModalProps) => {
  return (
    <MiniRoundedButton onClick={() => setIsAddFormOpen(true)}>
      <i className="fa-solid fa-plus" />
    </MiniRoundedButton>
  );
};

export default AddToDoButton;
