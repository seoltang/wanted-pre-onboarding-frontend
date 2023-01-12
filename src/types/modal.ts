export type AddModalProps = {
  setIsAddFormOpen(isAddFormOpen: boolean): void;
};

export type EditModalProps = {
  setIsEditFormOpen(isEditFormOpen: boolean): void;
  id?: string;
  toDo?: {
    title: string;
    content: string;
  };
};
