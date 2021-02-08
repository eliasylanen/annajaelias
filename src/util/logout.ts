import { navigate } from "svelte-routing";

export const logout = () => {
  localStorage.removeItem("token");
  navigate("/login", { replace: true });
};
