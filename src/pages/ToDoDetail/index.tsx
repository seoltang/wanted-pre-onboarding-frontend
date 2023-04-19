import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  AUTHORIZATION_KEY,
  ACCESS_TOKEN_KEY,
  API,
  ROUTE_PATH,
} from '@constants/config';
import ToDos from '@pages/ToDoList/ToDos';
import useTokenCheck from '@hooks/useTokenCheck';
import { MiniButton } from '@styles/common';
import DeleteToDoButton from './DeleteToDoButton';
import EditToDoButton from './EditToDoButton';
import EditToDoForm from './EditToDoForm';
import * as S from './style';

function ToDoDetail() {
  const [toDo, setToDo] = useState({
    title: '',
    content: '',
  });

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const { id } = useParams();
  if (id === undefined) throw new Error('id is undefined');

  useEffect(() => {
    const getToDoDetail = async () => {
      try {
        const response = await axios.get(`${API.todos}/${id}`, {
          headers: {
            [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY),
          },
        });

        if (response.statusText === 'OK') {
          const { title, content } = response.data.data;
          setToDo({ title, content });
        }
      } catch (error) {
        alert(error);
      }
    };

    getToDoDetail();
  }, [id, isEditFormOpen]);

  useTokenCheck();

  return (
    <S.Container>
      <ToDos isAddFormOpen={false} isEditFormOpen={isEditFormOpen} />
      <S.DetailWrapper>
        <S.ButtonWrapper>
          <Link to={ROUTE_PATH.toDo}>
            <MiniButton>
              <i className="fa-solid fa-angles-left" />
            </MiniButton>
          </Link>
          <S.RightSideBtnWrapper>
            <EditToDoButton setIsEditFormOpen={setIsEditFormOpen} />
            <DeleteToDoButton id={id} />
          </S.RightSideBtnWrapper>
        </S.ButtonWrapper>

        <S.TextWrapper>
          <S.Title>{toDo.title}</S.Title>
          <S.Content>{toDo.content}</S.Content>
        </S.TextWrapper>
      </S.DetailWrapper>

      <S.ModalWrapper isAddFormOpen={isEditFormOpen}>
        <EditToDoForm
          setIsEditFormOpen={setIsEditFormOpen}
          id={id}
          toDo={toDo}
        />
        <S.ModalBackground />
      </S.ModalWrapper>
    </S.Container>
  );
}

export default ToDoDetail;
