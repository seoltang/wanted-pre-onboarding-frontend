declare namespace authType {
  type Input = Record<string, string>;
}

declare type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
};

declare type UpdatedTodoType = {
  todo: string;
  isCompleted: boolean;
};
