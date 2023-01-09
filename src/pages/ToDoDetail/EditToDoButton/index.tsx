import React from 'react';
import { MiniButton } from '../../../styles/theme';
import type { ModalProps } from '..';

const EditToDoButton = ({ setIsEditFormOpen }: ModalProps) => {
  return (
    <MiniButton onClick={() => setIsEditFormOpen(true)}>
      <i className="fa-regular fa-pen-to-square" />
    </MiniButton>
  );
};

export default EditToDoButton;
