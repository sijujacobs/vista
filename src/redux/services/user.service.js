import axios from "axios";
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8880/api/vista/"
    : "https://www.vistabiomed.com/api/vista/";

const login = () => {
  return axios
    .get(BASE_URL + "user/login.php")
    .then((response) => response.data.user)
    .catch((err) => err);
};

export const userService = {
  login,
};
