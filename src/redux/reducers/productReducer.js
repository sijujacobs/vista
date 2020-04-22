import { productConstants } from "../constants";

const initialState = {
  products: [],
  loading: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case productConstants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case productConstants.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        products: [],
      };
    default: {
      return state;
    }
  }
};

export default productReducer;
