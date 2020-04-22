import { cartConstants } from "../constants";
export * from "./product.actions";

// import { productConstants } from "../constants";

// import axios from "axios";

// export const getVistaProducts = () => {
//   const baseURL =
//     window.location.hostname === "localhost"
//       ? "http://localhost:8880/api/vista/"
//       : "https://www.vistabiomed.com/api/vista/";

//   return (dispatch) => {
//     dispatch(fetchProductsBegin());
//     return axios
//       .get(baseURL + "product/read.php")
//       .then((response) => {
//         dispatch(fetchProductsSuccess(response.data.products));
//       })
//       .catch((err) => {
//         console.log("getVistaProducts :: ERROR : ", err);
//         dispatch(fetchProductsFailure(err));
//       });
//   };
// };

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
    type: cartConstants.ADD_TO_CART,
    payload: cartItem,
  };
};

export const editCartItem = (selectedProduct) => {
  return {
    type: cartConstants.EDIT_CART_ITEM,
    payload: selectedProduct,
  };
};

export const removeCartItem = (selectedProduct) => {
  return {
    type: cartConstants.REMOVE_CART_ITEM,
    payload: selectedProduct,
  };
};

export const updateInvoiceInfo = (invoiceData) => {
  return {
    type: cartConstants.UPDATE_INVOICE_INFO,
    payload: getInvoiceInfo(invoiceData),
  };
};

const getInvoiceInfo = (invoiceData) => {
  let invoiceCartItems = invoiceData.cartItems || [];
  let subTotal = 0;
  let grandTotal = 0;
  for (let i = 0; i < invoiceCartItems.length; i++) {
    let thisItem = invoiceCartItems[i];
    subTotal += thisItem.total_price;
  }

  let vatAmount = (invoiceData.invoiceInfo.vat / 100) * subTotal;
  grandTotal = subTotal > 0 ? vatAmount + subTotal : 0;
  return {
    subTotal: subTotal,
    vat: invoiceData.vat,
    discount: invoiceData.discount,
    grandTotal: grandTotal,
    paymentMethod: "VISA - Credit Card",
  };
};

//-----------
// export const fetchProductsBegin = () => ({
//   type: productConstants.FETCH_PRODUCTS_BEGIN,
// });

// export const fetchProductsSuccess = (products) => ({
//   // dispatch({ type: "GET_PHOTOS", payload: response.data.splice(4900) })
//   type: productConstants.FETCH_PRODUCTS_SUCCESS,
//   payload: { products },
// });

// export const fetchProductsFailure = (error) => ({
//   type: productConstants.FETCH_PRODUCTS_FAILURE,
//   payload: { error },
// });
