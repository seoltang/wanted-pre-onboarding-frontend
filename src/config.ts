export const BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '/proxy';

export const api = {
  todos: `${BASE_URL}/todos`,
  login: `${BASE_URL}/users/login`,
  signUp: `${BASE_URL}/users/create`,
};

export const PATH = {
  login: '/auth/login',
  signUp: '/auth/signup',
  toDo: '/todo',
};
