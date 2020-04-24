import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  userReducer,
});

export default rootReducer;
