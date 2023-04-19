import React, { useState } from 'react';
import axios from 'axios';
import { AUTHORIZATION_KEY, ACCESS_TOKEN_KEY, API } from '@constants/config';
import * as S from './style';

type AddModalProps = {
  setIsAddFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddToDoForm({ setIsAddFormOpen }: AddModalProps) {
  const [toDo, setToDo] = useState({
    title: '',
    content: '',
  });

  const changeToDoValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setToDo((state) => ({ ...state, [name]: value }));
  };

  const submitToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(API.todos, toDo, {
        headers: {
          [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY),
        },
      });

      if (response.statusText === 'OK') {
        setIsAddFormOpen(false);

        setToDo({
          title: '',
          content: '',
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const closeModal = () => {
    setIsAddFormOpen(false);

    setToDo({
      title: '',
      content: '',
    });
  };

  return (
    <S.Modal>
      <S.CloseModalBtn onClick={closeModal}>
        <i className="fa-solid fa-xmark" />
      </S.CloseModalBtn>
      <S.Form onSubmit={submitToDo}>
        <S.TitleInput
          name="title"
          placeholder="제목을 입력하세요."
          onChange={changeToDoValue}
          value={toDo.title}
        />
        <S.ContentTextarea
          name="content"
          placeholder="내용을 입력하세요."
          onChange={changeToDoValue}
          value={toDo.content}
          wrap="hard"
        />
        <S.SubmitToDoBtn>
          <i className="fa-solid fa-plus" />
        </S.SubmitToDoBtn>
      </S.Form>
    </S.Modal>
  );
}

export default AddToDoForm;
