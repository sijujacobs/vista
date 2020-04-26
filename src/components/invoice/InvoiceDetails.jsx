import React from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import "./css/invoice.css";
import InvoiceItem from "./InvoiceItem";

import InputField from "../../components/base_components/InputField";

const InvoiceDetails = (props) => {
  const { cartItems, invoiceInfo } = props;

  const addressChangeHandler = (e) => {};
  const actionButtonHandler = (e) => {};
  // const invoiceChangeHandler = (e) => {};

  const setInputData = (fieldKey, fieldValue) => {
    if (fieldKey === "trno") {
    }
  };

  return (
    <div className="invoiceDetails">
      <p className="title">Invoice</p>
      <div className="infoSection">
        <div className="dataBlock">
          <InputField
            labelValue="TR. No"
            inputValue="TR/5044/9320"
            isReadOnly={true}
          />
          <p className="addressField">
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
          <InputField
            labelValue="Lic. No"
            inputValue="DL/0094/4320"
            isReadOnly={true}
          />
          <InputField
            labelValue="Dl. No"
            inputValue="DL/0094/4320"
            isReadOnly={true}
          />
        </div>
        <div className="dataBlock">
          <InputField
            labelValue="Date"
            inputType="date"
            onChangeHandler={(val) => setInputData("invodate", val)}
          />
          <InputField
            labelValue="Invoice. No"
            inputType="text"
            inputPlaceholder="Invoice Number"
            inputValue="VB/DXB/001/04182020"
            onChangeHandler={(val) => setInputData("invono", val)}
          />
          <InputField
            labelValue="LPO. No"
            inputType="text"
            inputPlaceholder="LPO Number"
            inputValue="LPO/008/555"
            onChangeHandler={(val) => setInputData("lpono", val)}
          />
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
