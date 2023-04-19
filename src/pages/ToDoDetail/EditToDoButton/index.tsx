import React from 'react';
import { MiniButton } from '@styles/common';

type EditToDoButtonProps = {
  setIsEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditToDoButton({ setIsEditFormOpen }: EditToDoButtonProps) {
  return (
    <MiniButton onClick={() => setIsEditFormOpen(true)}>
      <i className="fa-regular fa-pen-to-square" />
    </MiniButton>
  );
}

export default EditToDoButton;
