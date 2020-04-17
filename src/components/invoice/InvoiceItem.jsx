import React from "react";

const InvoiceItem = (props) => {
  const { cartItem } = props;

  return (
    <div className="invoiceItem">
      <div className="productTitle">
        <div className="productName">
          {props.cartItem.product_name}
          <span className="productCode"> {props.cartItem.product_code}</span>
        </div>
        <span className="productDesc">
          {props.cartItem.product_description}
        </span>
      </div>
      <div className="rightAlign">
        <label>{cartItem.quantity}</label>
      </div>
      <div className="rightAlign">
        <label>{cartItem.product_price}</label>
      </div>
      <div className="rightAlign">
        <label>{cartItem.total_price}</label>
      </div>
    </div>
  );
};
export default InvoiceItem;
