import axios from 'axios';
import { API, ACCESS_TOKEN_KEY } from '@constants/config';

function getTodos() {
  let todos: TodoType[] | null = null;

  const suspender = axios(API.todos, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
    },
  }).then(({ data }) => {
    todos = data;
  });

  return {
    read() {
      if (todos === null) {
        throw suspender;
      } else {
        return todos;
      }
    },
  };
}

export default getTodos;
