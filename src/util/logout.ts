import { navigate } from 'svelte-routing';

export const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('user');
  navigate('/login', { replace: true });
};
