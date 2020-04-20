import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import "./css/invoice.css";
import InvoiceItem from "./InvoiceItem";

const InvoiceDetails = (props) => {
  const { cartItems, invoiceInfo } = props;

  const addressChangeHandler = (e) => {};
  const actionButtonHandler = (e) => {};
  const invoiceChangeHandler = (e) => {};

  return (
    <div className="invoiceDetails">
      <p className="title">Invoice</p>
      <div className="infoSection">
        <div className="leftBlock">
          <p className="fieldRow">
            <label>Lic #</label>
            <label>111111</label>
          </p>
          <p className="fieldRow">
            <label>Dl #</label>
            <label>22222</label>
          </p>
          <p className="fieldRow">
            <label>Lpo #</label>
            <label>333333</label>
          </p>
        </div>
        <div className="block">
          <p className="fieldRow">
            <label>Date</label>
            <input type="date" />
          </p>
          <p className="fieldRow">
            <label>Invoice #</label>
            <input
              type="text"
              value="VB/DXB/001/04182020"
              onChange={invoiceChangeHandler}
            />
          </p>
        </div>
        <div className="rightBlock">
          <p className="fieldRow">
            <label>Tr #</label>
            <input type="text" />
          </p>
          <p className="fieldRow addressField">
            <label>Bill To</label>
            <textarea
              className="addressTxtArea"
              rows={4}
              cols={22}
              onChange={addressChangeHandler}
            ></textarea>
          </p>
        </div>
      </div>

      <div className="itemSection">
        <div className="invoiceItemHeader">
          <div className="productTitle">Product</div>
          <div className="rightAlign">Quantity</div>
          <div className="rightAlign">Unit Price</div>
          <div className="rightAlign">Total Price</div>
        </div>
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((p) => <InvoiceItem key={p.product_id} cartItem={p} />)}
      </div>
      <div className="paymentSection">
        <div className="leftBlock">
          <p className="fieldRow">
            <span className="longLabel">Payment Method</span>
            <label>PayPal</label>
          </p>
        </div>
        <div className="rightBlock">
          <p className="fieldRow">
            <label>Sub Total</label>
            <label>{invoiceInfo.subTotal}</label>
          </p>
          <p className="fieldRow">
            <label>VAT</label>
            <label>{invoiceInfo.vat}</label>
          </p>
          <p className="fieldRow">
            <label>Discount</label>
            <label>{invoiceInfo.discount}</label>
          </p>
          <p className="fieldRow">
            <label>Grand Total</label>
            <label>{invoiceInfo.grandTotal}</label>
          </p>
        </div>
      </div>
      <div className="actionSection">
        <div className="btn-group">
          <NavLink className="linkButton" to="/printinvoice">
            Save
          </NavLink>
          <button className="button" onClick={() => actionButtonHandler()}>
            Cancel
          </button>
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

const connectedInvoiceDetails = connect(mapStateToProps)(InvoiceDetails);
export default connectedInvoiceDetails;

// export default InvoiceDetails;
