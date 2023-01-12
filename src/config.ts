export const BASE_URL = 'http://localhost:8080';

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

export const AUTHORIZATION_KEY = 'Authorization';
export const ACCESS_TOKEN_KEY = 'access_token';
