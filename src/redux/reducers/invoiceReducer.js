import {
  FETCH_INVOICE_BEGIN,
  FETCH_INVOICE_SUCCESS,
  FETCH_INVOICE_FAILURE,
} from "../constants/index";

const initialState = {
  products: [],
  loading: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case FETCH_PRODUCTS_FAILURE:
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
