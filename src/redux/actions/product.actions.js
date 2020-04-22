import { productConstants } from "../constants";
import { productService } from "../services";

const fetchProductsBegin = () => ({
  type: productConstants.FETCH_PRODUCTS_BEGIN,
});

const fetchProductsSuccess = (products) => ({
  type: productConstants.FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

const fetchProductsFailure = (error) => ({
  type: productConstants.FETCH_PRODUCTS_FAILURE,
  payload: { error },
});
const getProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    productService.getVistaProducts().then(
      (data) => {
        dispatch(fetchProductsSuccess(data));
      },
      (error) => {
        dispatch(fetchProductsFailure(error));
      }
    );
  };
};

export const productActions = {
  getProducts,
};
