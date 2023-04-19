import axios from 'axios';
import { ACCESS_TOKEN_KEY, API } from '@constants/config';

async function createTodo(
  newTodo: string,
  addNewTodo: (todo: TodoType) => void
) {
  if (!newTodo) {
    alert('내용을 입력해주세요.');
    return;
  }

  try {
    const response = await axios.post(
      API.todos,
      { todo: newTodo },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 201) {
      addNewTodo(response.data);
    }
  } catch (error) {
    console.error(error);
  }
}

export default createTodo;
