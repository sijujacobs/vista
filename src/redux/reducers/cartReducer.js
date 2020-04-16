import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  EDIT_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_INVOICE_INFO,
} from "../constants/index";

// {
//   product_id: 0,
//   product_name: "",
//   product_code: "",
//   product_description: "",
//   product_price: 0,
//   quantity: 0,
//   total_price: 0,
// },

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

// const setInvoiceInfo = () => {};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return Object.assign({}, state, {
        cartItems: state.cartItems.concat(action.payload),
      });
    case ADD_TO_CART:
      return Object.assign({}, state, {
        cartItems: state.cartItems.concat(action.payload),
      });
    case EDIT_CART_ITEM:
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

      // return editedCartItems;
      return Object.assign({}, state, {
        cartItems: editedCartItems,
      });
    case REMOVE_CART_ITEM:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(
          (product) => action.payload.product_id !== product.product_id
        ),
      });
    case UPDATE_INVOICE_INFO:
      // console.log("CartReducer :: UPDATE_INVOICE_INFO : ", action);
      //invoiceInfo: action.payloa.invoiceInfo
      return Object.assign({}, state, {
        invoiceInfo: action.payload,
      });
    default:
      return state;
  }
};

export default cartReducer;
