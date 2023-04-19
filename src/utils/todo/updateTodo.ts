import axios from 'axios';
import { ACCESS_TOKEN_KEY, API } from '@constants/config';

async function updateTodo(id: number, updatedTodo: UpdatedTodoType) {
  const { data } = await axios.put(`${API.todos}/${id}`, updatedTodo, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
      'Content-Type': 'application/json',
    },
  });

  return data;
}

export default updateTodo;
