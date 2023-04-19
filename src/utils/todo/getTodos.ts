import axios from 'axios';
import { API, ACCESS_TOKEN_KEY } from '@constants/config';

async function getTodos() {
  try {
    const response = await axios(API.todos, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    alert('로딩에 실패했습니다. 다시 시도해주세요.');
    return [];
  } catch (error) {
    console.error(error);

    alert('로딩에 실패했습니다. 다시 시도해주세요.');
    return [];
  }
}

export default getTodos;
