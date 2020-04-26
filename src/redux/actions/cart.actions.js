import { cartConstants } from "../constants";

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
const addToCart = (selectedProduct) => {
  const cartItem = {
    product_id: selectedProduct.product_id,
    product_name: selectedProduct.product_name,
    product_code: selectedProduct.product_code,
    product_description: selectedProduct.product_description,
    product_price: selectedProduct.product_price,
    quantity: 0,
    total_price: 0,
    inProp: true,
  };
  return {
    type: cartConstants.ADD_TO_CART,
    payload: cartItem,
  };
};

const editCartItem = (selectedProduct) => {
  return {
    type: cartConstants.EDIT_CART_ITEM,
    payload: selectedProduct,
  };
};

const removeCartItem = (selectedProduct) => {
  return {
    type: cartConstants.REMOVE_CART_ITEM,
    payload: selectedProduct,
  };
};

const updateInvoiceInfo = (invoiceData) => {
  return {
    type: cartConstants.UPDATE_INVOICE_INFO,
    payload: getInvoiceInfo(invoiceData),
  };
};

export const cartActions = {
  addToCart,
  editCartItem,
  removeCartItem,
  updateInvoiceInfo,
};
