import { cartConstants } from "../constants";

const initialState = {
  cartItems: [],
  invoiceInfo: {
    subTotal: 0,
    vat: 0,
    discount: 0,
    grandTotal: 0,
    paymentMethod: "",
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.GET_CART_ITEMS:
      return Object.assign({}, state, {
        cartItems: state.cartItems.concat(action.payload),
      });
    case cartConstants.ADD_TO_CART:
      return Object.assign({}, state, {
        cartItems: state.cartItems.concat(action.payload),
      });
    case cartConstants.EDIT_CART_ITEM:
      let editedCartItems = state.cartItems.map((item) => {
        if (item.product_id === action.payload.product_id) {
          return {
            ...item,
            quantity: action.payload.quantity,
            product_price: action.payload.product_price,
            total_price: action.payload.quantity * action.payload.product_price,
          };
        } else {
          return item;
        }
      });

      return Object.assign({}, state, {
        cartItems: editedCartItems,
      });
    case cartConstants.REMOVE_CART_ITEM:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(
          (product) => action.payload.product_id !== product.product_id
        ),
      });
    case cartConstants.UPDATE_INVOICE_INFO:
      return Object.assign({}, state, {
        invoiceInfo: action.payload,
      });
    default:
      return state;
  }
};

export default cartReducer;
