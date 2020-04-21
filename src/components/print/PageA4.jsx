import React from "react";
// import "./css/print.css";
const PageA4 = (props) => {
  const { totalPages, info, items } = props;
  console.log(" PageA4 ::props : ", props);

  return (
    <div className="pageA4">
      <header>
        <div>Header</div>
      </header>
      <div className="pageBody">
        {info.pageNumber === 1 && (
          <div className="infoSection">
            <div className="dataBlock "> Left Block</div>
            <div className="dataBlock">Center</div>
            <div className="dataBlock">Right</div>
          </div>
        )}

        <div className="itemsSection">
          <div className="itemHeaderBlock">
            <div>Product</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Total</div>
          </div>
          {items &&
            items.length > 0 &&
            items.map((item, i) => {
              return (
                <div className="itemBlock" key={i}>
                  <div className="productDesc">
                    <span>{item.product_description}</span> :
                    <span>{item.product_code}</span>
                  </div>
                  <div className="quantity">{item.quantity}</div>
                  <div className="price">{item.product_price}</div>
                  <div className="totalPrice">{item.total_price}</div>
                </div>
              );
            })}
        </div>
        {info.pageNumber === totalPages && (
          <>
            <div className="paymentSection">
              <div>Payment method</div>
              <div>
                <div>Subtotal</div>
                <div>VAT</div>
                <div>Discount</div>
                <div>Grand Total</div>
              </div>
            </div>
            <div className="signatureSection">Signature</div>
          </>
        )}
      </div>
      <footer>
        <div>
          Footer
          <div>
            Pages : {info.pageNumber}/{totalPages}
          </div>
        </div>
      </footer>
    </div>
  );
};
export default PageA4;
