import React from 'react';
import { MiniButton } from '../../../styles/theme';
import type { EditModalProps } from '../../../types/modal';

const EditToDoButton = ({ setIsEditFormOpen }: EditModalProps) => {
  return (
    <MiniButton onClick={() => setIsEditFormOpen(true)}>
      <i className="fa-regular fa-pen-to-square" />
    </MiniButton>
  );
};

export default EditToDoButton;
