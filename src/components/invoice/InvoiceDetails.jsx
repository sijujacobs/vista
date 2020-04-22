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
        <div className="dataBlock">
          <p className="fieldRow">
            <label className="keyLabel">Tr No</label>
            <input type="text" />
          </p>
          <p className="fieldRow addressField">
            <label className="keyLabel">Bill To</label>
            <textarea
              className="addressTxtArea"
              rows={4}
              cols={22}
              onChange={addressChangeHandler}
            ></textarea>
          </p>
        </div>

        <div className="dataBlock">
          <p className="fieldRow">
            <label className="keyLabel">Lic No</label>
            <label className="valueLabel">LN/123/XY55</label>
          </p>
          <p className="fieldRow">
            <label className="keyLabel">Dl No</label>
            <label className="valueLabel">DL/0094/4320</label>
          </p>
        </div>
        <div className="dataBlock">
          <p className="fieldRow">
            <label className="keyLabel">Date</label>
            <input type="date" />
          </p>
          <p className="fieldRow">
            <label className="keyLabel">Invoice No</label>
            <input
              type="text"
              value="VB/DXB/001/04182020"
              onChange={invoiceChangeHandler}
            />
          </p>
          <p className="fieldRow">
            <label className="keyLabel">Lpo No </label>
            <label className="valueLabel">LPO/008/555</label>
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

      <div className="summarySection">
        <div className="dataBlock">
          <p>
            <label className="longLabel">Payment Method : </label>
            <label className="valueLabel">Bank Transfer</label>
          </p>
          <p>
            <label className="longLabel">Bank </label>
          </p>
          <p>
            <label className="longLabel">Account # </label>
          </p>
          <p>
            <label className="longLabel">IFSC </label>
          </p>
        </div>
        <div className="dataBlock rightAlign">
          <p>
            <label className="keyLabel">Sub Total</label>
            <label className="valueLabel rightAlign">
              {invoiceInfo.subTotal}
            </label>
          </p>
          <p>
            <label className="keyLabel">VAT</label>
            <label className="valueLabel rightAlign">{invoiceInfo.vat}</label>
          </p>
          <p>
            <label className="keyLabel">Discount</label>
            <label className="valueLabel rightAlign">
              {invoiceInfo.discount}
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

      <div className="actionSection">
        <div className="btn-group">
          <NavLink className="linkButton" to="/print">
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
