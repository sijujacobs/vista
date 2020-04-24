import { userConstants } from "../constants";

const initialState = {
  loggedUser: {},
  registeredUser: {},
  loading: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedUser: action.payload.loggedUser,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        loggedUser: {},
      };
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        registeredUser: action.payload.loggedUser,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        registeredUser: {},
      };
    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        registeredUser: action.payload.user,
      };
    case userConstants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        registeredUser: {},
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
