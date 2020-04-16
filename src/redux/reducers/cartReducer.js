import { GET_CART_ITEMS, ADD_TO_CART, REMOVE_ITEM } from "../constants/index";

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
};
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
    case REMOVE_ITEM:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(
          (product) => action.payload.product_id !== product.product_id
        ),
      });
    default:
      return state;
  }
};

export default cartReducer;
