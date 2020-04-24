import { userService } from "../services";
import { userConstants } from "../constants";
// import { useHistory } from "react-router-dom";

const request = (user) => {
  return { type: userConstants.LOGIN_REQUEST, payload: user };
};
const success = (user) => {
  return { type: userConstants.LOGIN_SUCCESS, payload: user };
};
const failure = (error) => {
  return { type: userConstants.LOGIN_FAILURE, error };
};

const registerRequest = (user) => {
  return { type: userConstants.REGISTER_REQUEST, payload: user };
};
const registerSuccess = (registeredUser) => {
  return { type: userConstants.REGISTER_SUCCESS, payload: registeredUser };
};
const registerFailure = (error) => {
  return { type: userConstants.REGISTER_FAILURE, error };
};

const resetPasswordRequest = (user) => {
  return { type: userConstants.RESET_PASSWORD_REQUEST, payload: user };
};
const resetPasswordSuccess = (user) => {
  return { type: userConstants.RESET_PASSWORD_SUCCESS, payload: user };
};
const resetPasswordFailure = (error) => {
  return { type: userConstants.RESET_PASSWORD_FAILURE, error };
};

const login = (user) => {
  return (dispatch) => {
    dispatch(request(user));
    userService.login(user).then(
      (user) => {
        // const history = useHistory();
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
};
const registerUser = (user) => {
  return (dispatch) => {
    dispatch(registerRequest(user));
    userService.registerUser(user).then(
      (registeredUser) => {
        dispatch(registerSuccess(registeredUser));
      },
      (error) => {
        dispatch(registerFailure(error));
      }
    );
  };
};
const resetPassword = (user) => {
  return (dispatch) => {
    dispatch(resetPasswordRequest(user));
    userService.resetPassword(user).then(
      (user) => {
        console.log("UserAction ::Success user : ", user);
        dispatch(resetPasswordSuccess(user));
      },
      (error) => {
        dispatch(resetPasswordFailure(error));
      }
    );
  };
};
export const userActions = {
  login,
  registerUser,
  resetPassword,
};
