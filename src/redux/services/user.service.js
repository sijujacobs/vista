import axios from "axios";
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8880/api/vista/"
    : "https://www.vistabiomed.com/api/vista/";

const registerUser = (user) => {
  const options = {
    method: "post",
    url: BASE_URL + "user/register.php",
    data: user,
    headers: {
      Authorization: "Bearer 123456",
    },
  };
  return axios(options)
    .then((response) => {
      return { vistaCode: response.data };
    })
    .catch((err) => err);
};
const resetPassword = (user) => {
  const options = {
    method: "post",
    url: BASE_URL + "user/resetPassword.php",
    data: user,
    headers: {
      Authorization: "Bearer 123456",
    },
  };

  // console.log("Axios  REQUEST :: options: ", options);
  return axios(options)
    .then((response) => {
      console.log("Axios  RESPONSE :: SUCCESS response: ", response.data);
      return { vistaCode: response.data };
    })
    .catch((err) => console.log("Axios  ERROR :: ERR: ", err));
};

const login = (user) => {
  const options = {
    method: "post", //you can set what request you want to be
    url: BASE_URL + "user/login.php",
    data: user,
    headers: {
      Authorization: "Bearer 123456",
    },
  };
  return axios(options)
    .then((response) => {
      return { loggedUser: response.data };
    })
    .catch((err) => err);
};

export const userService = {
  login,
  registerUser,
  resetPassword,
};
