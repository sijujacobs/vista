import React from "react";
const PageA4 = (props) => {
  const { invoiceInfo, totalPages, page } = props;
  console.log("PageA4 :: props : ", props);
  return (
    <div className="pageA4">
      <header>
        <div></div>
      </header>
      <div className="pageBody">
        {page.pageNumber === 1 && (
          <div className="infoSection">
            <div className="dataBlock">
              <p className="addressField">
                <label className="keyLabel">Bill To</label>
                <span className="multiLineSpan">
                  Addressline 1, Addressline 2 , City, State, 690514
                </span>
              </p>
              <p className="fieldRow">
                <label className="keyLabel">Tr No </label>
                <label className="valueLabel">TR-33-33TRD</label>
              </p>
            </div>
            <div className="dataBlock ">
              <p className="fieldRow">
                <label className="keyLabel">Lic No </label>
                <label className="valueLabel">LN/123/XY55</label>
              </p>
              <p className="fieldRow">
                <label className="keyLabel">Dl No</label>
                <label className="valueLabel">DL/0094/4320</label>
              </p>
            </div>
            <div className="dataBlock">
              <p className="fieldRow">
                <label className="keyLabel">Date </label>
                <label className="valueLabel">04-18-2020</label>
              </p>

              <p className="fieldRow">
                <label className="keyLabel">Invoice No</label>
                <label className="valueLabel">VB/DXB/001/04182020</label>
              </p>
              <p className="fieldRow">
                <label className="keyLabel">Lpo No </label>
                <label className="valueLabel">LPO/008/555</label>
              </p>
            </div>
          </div>
        )}

        <div className="itemsSection">
          <div className="itemHeaderBlock">
            <div>Product</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Total</div>
          </div>
          {page.items &&
            page.items.length > 0 &&
            page.items.map((item, i) => {
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
        {page.pageNumber === totalPages && (
          <>
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
                  <label className="valueLabel rightAlign">
                    {invoiceInfo.vat}
                  </label>
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

            <div className="signatureSection">Signature</div>
          </>
        )}
      </div>
      <div className="pageCountInfo">
        (Page : {page.pageNumber}/{totalPages})
      </div>

      <footer>
        <div className="leftSection">
          <span>Phone : 99899899899 </span>
        </div>
        <div className="centerSection centerAlign">
          <span>Email : sales@vistabiomed.com </span>
        </div>
        <div className="rightSection rightAlign">
          <span>www.vistabiomed.com</span>
        </div>
      </footer>
    </div>
  );
};
export default PageA4;
