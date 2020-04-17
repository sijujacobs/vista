import React from "react";
import { connect } from "react-redux";
import "./css/invoice.css";
import InvoiceItem from "./InvoiceItem";

const InvoiceDetails = (props) => {
  const { cartItems, invoiceInfo } = props;

  const addressChangeHandler = (e) => {};
  const actionButtonHandler = (e) => {};

  return (
    <div className="invoiceDetails">
      <h2 className="title">Tax Invoice</h2>
      <div className="infoSection">
        <div className="leftSection">
          <p className="fieldRow">
            <label>LIC #</label>
            <label>111111</label>
          </p>
          <p className="fieldRow">
            <label>DL #</label>
            <label>22222</label>
          </p>
          <p className="fieldRow">
            <label>TRN #</label>
            <label>333333</label>
          </p>
        </div>
        <div className="rightSection">
          <p className="fieldRow">
            <label>Date</label>
            <input type="date" />
          </p>
          <p className="fieldRow">
            <label>LPO #</label>
            <input type="text" />
          </p>
          <p className="fieldRow">
            <label>Invoice #</label>
            <input type="text" />
          </p>
        </div>
      </div>
      <div className="addressSection">
        <div className="leftSection">
          <label>Bill To,</label>
          <textarea
            className="txtAddress"
            rows={5}
            cols={50}
            onChange={addressChangeHandler}
          />
        </div>
        <div className="rightSection"></div>
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
        <div className="leftSection">
          <p className="fieldRow">
            <span className="longLabel">Payment Method</span>
            <label>PayPal</label>
          </p>
        </div>
        <div className="rightSection">
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
          <button className="button" onClick={() => actionButtonHandler()}>
            Save & Print
          </button>

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
