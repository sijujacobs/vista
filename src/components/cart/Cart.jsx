import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { cartActions } from "../../redux/actions";

import { NavLink } from "react-router-dom";
import "./css/cart.css";

const Cart = (props) => {
  const { cartItems, invoiceInfo, updateInvoiceInfo } = props;
  useEffect(() => {
    if (cartItems.length > 0) {
      let invoiceData = {
        cartItems: cartItems,
        invoiceInfo: {
          vat: 5,
          discount: 4,
        },
      };
      updateInvoiceInfo(invoiceData);
    }
  }, [cartItems, updateInvoiceInfo]);
  const inputChangeHandler = (e) => {
    let invoiceData = {
      cartItems: cartItems,
      invoiceInfo: {
        vat: 0,
        discount: 0,
      },
    };
    e.target.classList.contains("vat")
      ? (invoiceData.invoiceInfo.vat = e.target.value)
      : (invoiceData.invoiceInfo.discount = e.target.value);
    updateInvoiceInfo(invoiceData);
  };

  // const printInvoiceHandler = (e) => {};

  return (
    <div id="cart" className="cart">
      <div className="sectionHeader">Cart Items : {cartItems.length}</div>
      <div className="cartHeader">
        <div className="productTitle">Product</div>
        <div className="quantity">Quantity</div>
        <div className="unitPrice">Unit Price</div>
        <div className="totalPrice">Total Price</div>
      </div>
      <div className="cartBody">
        <div className="scrollArea">
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((p) => <CartItem key={p.product_id} cartItem={p} />)}
          <div className="summarySection">
            <div className="dataBlock">
              <p>
                <label className="longLabel">Payment Method : </label>
                <label className="valueLabel">PayPal</label>
              </p>
            </div>
            <div className="dataBlock">
              <p>
                <label className="keyLabel">Sub Total</label>
                <label className="valueLabel rightAlign">
                  {invoiceInfo.subTotal}
                </label>
              </p>
              <p>
                <label className="keyLabel">VAT</label>
                <label className="valueLabel rightAlign">
                  <input
                    className="numericStepper vat rightAlign"
                    type="number"
                    onChange={inputChangeHandler}
                  />
                </label>
              </p>
              <p>
                <label className="keyLabel">Discount</label>
                <label>
                  <input
                    className="numericStepper discount hidden"
                    type="number"
                    onChange={inputChangeHandler}
                  />
                </label>
              </p>
              <p>
                <label className="keyLabel">Grand Total</label>
                <label className="valueLabel rightAlign">
                  {invoiceInfo.grandTotal}
                </label>
              </p>
            </div>
          </div>

          <div className="cartFooter">
            <div>
              <NavLink to="/invoice">Create Invoice</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// className={invoiceInfo.grandTotal > 0 ? "show" : "hide"}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
    invoiceInfo: state.cartReducer.invoiceInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateInvoiceInfo: (invoiceData) =>
      dispatch(cartActions.updateInvoiceInfo(invoiceData)),
  };
};

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default connectedCart;
