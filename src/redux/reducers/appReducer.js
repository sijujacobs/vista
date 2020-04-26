import { cartConstants } from "../constants";

const initialState = {
  appInfo: {
    appName: "vista biomed",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    tagline: "",
    website: "https://www.vistabiomed.com",
    email: "sales@vistabiomed.com",
    phone1: "9988776655",
    phone2: "",
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.GET_APP_INFO:
      return Object.assign({}, state, {
        appInfo: state.appInfo.concat(action.payload),
      });
    default:
      return state;
  }
  // return state;
};

export default appReducer;
