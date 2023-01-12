import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ToDos from '../ToDoList/ToDos';
import DeleteToDoButton from './DeleteToDoButton';
import EditToDoButton from './EditToDoButton';
import EditToDoForm from './\bEditToDoForm';
import useTokenCheck from '../../hooks/useTokenCheck';
import { AUTHORIZATION_KEY, ACCESS_TOKEN_KEY, api, PATH } from '../../config';
import { MiniButton, flexCustom } from '../../styles/theme';

const ToDoDetail = () => {
  const [toDo, setToDo] = useState({
    title: '',
    content: '',
  });

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getToDoDetail = async () => {
      try {
        const response = await axios.get(`${api.todos}/${id}`, {
          headers: { [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY) },
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
    <Container>
      <ToDos isAddFormOpen={false} isEditFormOpen={isEditFormOpen} />
      <DetailWrapper>
        <ButtonWrapper>
          <Link to={PATH.toDo}>
            <MiniButton>
              <i className="fa-solid fa-angles-left" />
            </MiniButton>
          </Link>
          <RightSideBtnWrapper>
            <EditToDoButton setIsEditFormOpen={setIsEditFormOpen} />
            <DeleteToDoButton id={id} />
          </RightSideBtnWrapper>
        </ButtonWrapper>

        <TextWrapper>
          <Title>{toDo.title}</Title>
          <Content>{toDo.content}</Content>
        </TextWrapper>
      </DetailWrapper>

      <ModalWrapper isAddFormOpen={isEditFormOpen}>
        <EditToDoForm setIsEditFormOpen={setIsEditFormOpen} id={id} toDo={toDo} />
        <ModalBackground />
      </ModalWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  ${flexCustom('stretch', 'space-between')}
  min-height: 100vh;

  & > * {
    flex: 1 1 0;
  }
`;

const DetailWrapper = styled.div`
  background-color: rgb(255 255 255 / 0.5);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
`;

const ButtonWrapper = styled.div`
  ${flexCustom('center', 'space-between')}
  margin: 16px 16px 0;
`;

const RightSideBtnWrapper = styled.div`
  ${flexCustom('center', 'space-between')}

  & button {
    margin-right: 16px;
  }
`;

const TextWrapper = styled.div`
  padding: 20px 32px 0;
`;

const Title = styled.h3`
  padding-bottom: 24px;
  font-size: 28px;
  line-height: 1.2;
`;

const Content = styled.pre`
  color: gray;
  line-height: 1.5;
`;

const ModalWrapper = styled.div<{ isAddFormOpen: boolean }>`
  position: absolute;
  display: ${({ isAddFormOpen }) => (isAddFormOpen ? 'block' : 'none')};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.25);
`;

export default ToDoDetail;
