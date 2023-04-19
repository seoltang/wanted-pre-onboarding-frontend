import React from 'react';
import { MiniButton } from '@styles/common';

type EditTodoButtonProps = {
  setIsEditModeOn: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditTodoButton({ setIsEditModeOn }: EditTodoButtonProps) {
  return (
    <MiniButton
      onClick={() => setIsEditModeOn(true)}
      data-testid="modify-button"
    >
      <i className="fa-solid fa-pen" />
    </MiniButton>
  );
}

export default EditTodoButton;
