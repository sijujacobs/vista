import userService from "../services";

const request = (user) => {
  return { type: userConstants.LOGIN_REQUEST, user };
};
const success = (user) => {
  return { type: userConstants.LOGIN_SUCCESS, user };
};
const failure = (error) => {
  return { type: userConstants.LOGIN_FAILURE, error };
};
const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        // history.push("/");
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
};
export const userActions = {
  login,
};
