import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  AUTHORIZATION_KEY,
  ACCESS_TOKEN_KEY,
  API,
  ROUTE_PATH,
} from '@constants/config';
import * as S from './style';

function DeleteToDoButton({ id }: { id: string | undefined }) {
  const navigate = useNavigate();

  const deleteToDo = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      try {
        const response = await axios.delete(`${API.todos}/${id}`, {
          headers: {
            [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY),
          },
        });

        if (response.statusText === 'OK') {
          navigate(ROUTE_PATH.toDo);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <S.DeleteButton onClick={deleteToDo}>
      <i className="fa-regular fa-trash-can" />
    </S.DeleteButton>
  );
}

export default DeleteToDoButton;
