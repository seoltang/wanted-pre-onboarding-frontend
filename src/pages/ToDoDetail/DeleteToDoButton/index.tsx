import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MiniButton } from '../../../styles/theme';
import { AUTHORIZATION_KEY, ACCESS_TOKEN_KEY, api, PATH } from '../../../config';

const DeleteToDoButton = ({ id }: { id: string | undefined }) => {
  const navigate = useNavigate();

  const deleteToDo = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      try {
        const response = await axios.delete(`${api.todos}/${id}`, {
          headers: { [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY) },
        });

        if (response.statusText === 'OK') {
          navigate(PATH.toDo);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <DeleteButton onClick={deleteToDo}>
      <i className="fa-regular fa-trash-can" />
    </DeleteButton>
  );
};

const DeleteButton = styled(MiniButton)`
  color: coral;

  &:hover {
    color: orangered;
  }
`;

export default DeleteToDoButton;
