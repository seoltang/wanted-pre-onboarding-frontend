import React from 'react';
import { MiniRoundedButton } from '@styles/common';

type AddToDoButtonProps = {
  setIsAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddToDoButton({ setIsAddFormOpen }: AddToDoButtonProps) {
  return (
    <MiniRoundedButton onClick={() => setIsAddFormOpen(true)}>
      <i className="fa-solid fa-plus" />
    </MiniRoundedButton>
  );
}

export default AddToDoButton;
