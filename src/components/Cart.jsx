import React, { useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { updateInvoiceInfo } from "../redux/actions/index";

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
      // console.log(" Cart :: useEffect : invoiceData  ", invoiceData);
      updateInvoiceInfo(invoiceData);
    }
  }, [cartItems, updateInvoiceInfo]);
  const inputChangeHandler = (e) => {
    // console.log("Cart  ::inputChangeHandler : ");
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

  return (
    <div id="cart" className="cart">
      <div className="sectionHeader">Cart Items</div>
      <div className="cartHeader">
        <div className="productTitle">Product</div>
        <div className="quantity">Quantity</div>
        <div className="unitPrice">Unit Price</div>
        <div className="totalPrice">Total Price</div>
      </div>

      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((p) => <CartItem key={p.product_id} cartItem={p} />)}
      <div className="cartFooter">
        <div className="paymentSection">
          <div className="payment">
            Payment Method : {invoiceInfo.paymentMethod}
          </div>
        </div>
        <div className="amountSection">
          <div className="labelSection">
            <div>Sub Total </div>
            <div>VAT </div>
            <div>Discount</div>
            <div>Grand Total</div>
          </div>
          <div className="valueSection">
            <div>{invoiceInfo.subTotal}</div>
            <div>
              <input
                className="numericStepper vat"
                type="number"
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <input
                className="numericStepper discount"
                type="number"
                onChange={inputChangeHandler}
              />
            </div>

            <p>{invoiceInfo.grandTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
    invoiceInfo: state.cartReducer.invoiceInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateInvoiceInfo: (invoiceData) =>
      dispatch(updateInvoiceInfo(invoiceData)),
  };
};

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default connectedCart;
