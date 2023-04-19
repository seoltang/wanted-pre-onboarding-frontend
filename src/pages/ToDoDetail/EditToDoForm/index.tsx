import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AUTHORIZATION_KEY, ACCESS_TOKEN_KEY, API } from '@constants/config';
import * as S from './style';

type EditModalProps = {
  setIsEditFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  toDo: {
    title: string;
    content: string;
  };
};

function EditToDoForm({ setIsEditFormOpen, id, toDo }: EditModalProps) {
  const [editedToDo, setEditedToDo] = useState({
    title: toDo?.title,
    content: toDo?.content,
  });

  useEffect(() => {
    setEditedToDo({
      title: toDo?.title,
      content: toDo?.content,
    });
  }, [toDo]);

  const changeToDoValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedToDo((state) => ({ ...state, [name]: value }));
  };

  const submitToDo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.put(`${API.todos}/${id}`, editedToDo, {
        headers: {
          [AUTHORIZATION_KEY]: localStorage.getItem(ACCESS_TOKEN_KEY),
        },
      });

      if (response.statusText === 'OK') {
        setIsEditFormOpen(false);

        setEditedToDo({
          title: '',
          content: '',
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const closeModal = () => {
    setIsEditFormOpen(false);

    setEditedToDo({
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
          value={editedToDo.title}
        />
        <S.ContentTextarea
          name="content"
          placeholder="내용을 입력하세요."
          onChange={changeToDoValue}
          value={editedToDo.content}
          wrap="hard"
        />
        <S.SubmitToDoBtn>
          <i className="fa-solid fa-check" />
        </S.SubmitToDoBtn>
      </S.Form>
    </S.Modal>
  );
}

export default EditToDoForm;
