import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { MiniButton } from '../../../styles/theme';
import { api, PATH } from '../../../config';

const DeleteToDoButton = ({ id }: { id: string | undefined }) => {
  const navigate = useNavigate();

  const deleteToDo = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      try {
        const response = await axios.delete(`${api.todos}/${id}`, {
          headers: { Authorization: localStorage.getItem('token') },
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
