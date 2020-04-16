import {
  ADD_TO_CART,
  REMOVE_ITEM,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../constants/index";
import axios from "axios";

export const getVistaProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    return (
      axios
        .get("http://localhost:8880/api/vista/product/read.php")
        // .then(response => {dispatch(fetchDataFormReslt(response.data))})
        .then((response) => {
          // console.log("getVistaProducts :: Success : ", response);
          // dispatch({ type: "GET_PHOTOS", payload: response.data.splice(4900) })
          dispatch(fetchProductsSuccess(response.data.products));
        })
        .catch((err) => {
          console.log("getVistaProducts :: ERROR : ", err);
          dispatch(fetchProductsFailure(err));
        })
    );
  };
};

export const addToCart = (selectedProduct) => {
  const cartItem = {
    product_id: selectedProduct.product_id,
    product_name: selectedProduct.product_name,
    product_code: selectedProduct.product_code,
    product_description: selectedProduct.product_description,
    product_price: selectedProduct.product_price,
    quantity: 0,
    total_price: 0,
  };
  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
};

export const removeItem = (selectedProduct) => {
  return {
    type: REMOVE_ITEM,
    payload: selectedProduct,
  };
};

//-----------
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  // dispatch({ type: "GET_PHOTOS", payload: response.data.splice(4900) })
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});
