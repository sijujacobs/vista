import React from "react";

import { connect } from "react-redux";
import { cartActions } from "../../redux/actions";

const CartItem = (props) => {
  const { cartItem, editCartItem, removeCartItem } = props;

  const updateItem = (inputData) => {
    let editedItem = {
      product_id: cartItem.product_id,
      product_name: cartItem.product_name,
      product_code: cartItem.product_code,
      product_description: cartItem.product_description,
      product_price: inputData.product_price,
      quantity: inputData.quantity,
      total_price: inputData.product_price * inputData.quantity,
    };
    editCartItem(editedItem);
  };

  const inputChangeHandler = (e) => {
    let inputData = {
      quantity: cartItem.quantity,
      product_price: cartItem.product_price,
    };
    e.target.classList.contains("quantity")
      ? (inputData.quantity = e.target.value)
      : (inputData.product_price = e.target.value);
    updateItem(inputData);
  };

  const removeItemHandler = () => {
    removeCartItem(cartItem);
  };
  return (
    <div className="cartItem">
      <div className="productTitle">
        <div className="productName">
          {cartItem.product_name}
          <span className="productCode"> {cartItem.product_code}</span>
        </div>
        <span className="productDesc">{cartItem.product_description}</span>
      </div>
      <div className="gridCol">
        <input
          className="numericStepper quantity"
          type="number"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="gridCol">
        <input
          className="numericStepper unitPrice"
          type="number"
          onChange={inputChangeHandler}
        />
      </div>
      <div className="gridCol rightAlign">
        <div>{cartItem.total_price}</div>
      </div>
      <div className="action">
        <span className="removeIcon" onClick={removeItemHandler}>
          &#10005;
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editCartItem: (selectedProduct) =>
      dispatch(cartActions.editCartItem(selectedProduct)),
    removeCartItem: (selectedProduct) =>
      dispatch(cartActions.removeCartItem(selectedProduct)),
  };
};

const connectedCartItem = connect(null, mapDispatchToProps)(CartItem);
export default connectedCartItem;
