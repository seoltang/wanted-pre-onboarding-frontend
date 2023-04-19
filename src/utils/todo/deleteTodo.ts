import axios from 'axios';
import { ACCESS_TOKEN_KEY, API } from '@constants/config';

async function deleteTodo(
  id: number,
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
) {
  try {
    if (window.confirm('삭제하시겠습니까?')) {
      const response = await axios.delete(`${API.todos}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
        },
      });

      if (response.status === 204) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        return;
      }

      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  } catch (error) {
    console.error(error);
  }
}

export default deleteTodo;
