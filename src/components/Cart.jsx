import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  // const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    setSubTotal((s) => s + totalPrice);
  }, [totalPrice]);

  const updateInvoiceAmount = (data) => {
    // console.log("Cart ::updateInvoiceAmount :data : ", data);
    // let sTotal = subTotal + data;
    console.log(
      "Cart ::updateInvoiceAmount :props.cartItems : ",
      props.cartItems
    );
    setTotalPrice(data);
  };
  return (
    <div id="cart" className="cart">
      <div className="sectionHeader">Cart Items</div>
      <div className="cartHeader">
        <div className="productTitle">Product</div>
        <div className="quantity">Quantity</div>
        <div className="unitPrice">Unit Price</div>
        <div className="totalPrice">Total Price</div>
      </div>

      {props.cartItems &&
        props.cartItems.length > 0 &&
        props.cartItems.map((p) => (
          <CartItem
            key={p.product_id}
            cartItem={p}
            updateInvoice={(data) => updateInvoiceAmount(data)}
          />
        ))}
      <div className="cartFooter">
        <div className="subTotal">Sub Total :{subTotal} </div>
        <div className="vat">VAT :</div>
        <div className="discount">Discount :</div>
        <div className="grantTotal">Grand Total :</div>
        <div className="payment">Payment Method : </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
  };
};

const connectedCart = connect(mapStateToProps)(Cart);
export default connectedCart;
