import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { removeItem } from "../redux/actions/index";

const CartItem = (props) => {
  console.log(" CartItem :: props : ", props);
  const { updateInvoice } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(quantity * unitPrice);
    updateInvoice(totalPrice);
  }, [quantity, unitPrice, totalPrice, updateInvoice]);

  const quantityChangeHandler = (tParam) => (event) => {
    setQuantity(event.target.value);
  };

  const unitPriceChangeHandler = (tParam) => (event) => {
    setUnitPrice(event.target.value);
  };

  const removeItemHandler = (selectedProduct) => {
    props.removeItem(selectedProduct);
  };
  return (
    <div className="cartItem">
      <div className="productTitle">
        <div className="productName">
          {props.cartItem.product_name}
          <span className="productCode"> {props.cartItem.product_code}</span>
        </div>
        <span className="productDesc">
          {props.cartItem.product_description}
        </span>
      </div>
      <div className="quantity">
        <input
          className="numericStepper"
          type="number"
          onChange={quantityChangeHandler(props.cartItem)}
        />
      </div>
      <div className="unitPrice">
        <input
          className="numericStepper"
          type="number"
          onChange={unitPriceChangeHandler(props.cartItem)}
        />
      </div>
      <div className="totalPrice">
        <span> {totalPrice}</span>
      </div>
      <div className="action">
        <span
          className="removeIcon"
          onClick={() => removeItemHandler(props.cartItem)}
        >
          &#10005;
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (selectedProduct) => dispatch(removeItem(selectedProduct)),
  };
};

const connectedCartItem = connect(null, mapDispatchToProps)(CartItem);
export default connectedCartItem;
