import axios from 'axios';

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  const user = sessionStorage.getItem('user');

  if (!!token && !!user) return true;

  const data = axios.post('/api/me', {
    user,
  });

  console.log(data);
};
