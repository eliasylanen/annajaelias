import axios, { AxiosResponse } from 'axios';
import type { User } from '../types';

export const checkLogin = async () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const { data: user }: AxiosResponse<User> = await axios.post('./api/me', {
    token,
  });

  sessionStorage.setItem('user', JSON.stringify(user));

  return user;
};
