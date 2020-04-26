import { combineReducers } from "redux";
import appReducer from "./appReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  appReducer,
  productReducer,
  cartReducer,
  userReducer,
});

export default rootReducer;
