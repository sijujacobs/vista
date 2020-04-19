import React from "react";

import { connect } from "react-redux";

import "./css/invoice.css";
// class PrintInvoice extends React.Component {
const PrintInvoice = (props) => {
  const { cartItems, invoiceInfo } = props;
  console.log("Print : cartItems :", cartItems);
  const print = () => {
    var disp_setting = "toolbar=yes,location=no,top=200,left=200,";
    // disp_setting += "directories=yes,menubar=yes,";
    // disp_setting += "scrollbars=yes";
    var content_vlue = document.getElementById("printArea").innerHTML;
    var docprint = window.open("", "", disp_setting);
    // var docprint = window.open("", "");
    docprint.document.open();

    docprint.document.write("<head>");
    docprint.document.write('<style type="text/css">');
    docprint.document.write("body{ margin:0px;}");
    docprint.document.write("@page { size: auto;  margin: 0mm; }");
    docprint.document.write(
      ".pageHeader{display: grid; justify-items: center; margin: 20px;border-bottom: 1px solid #5e125c;}"
    );
    docprint.document.write(".pageBody{padding: 10px 30px 10px 60px;}");
    docprint.document.write(".logoSection{color:red;}");
    docprint.document.write(
      ".pageFooter{display: grid; justify-items: center; margin: 20px; border-top: 1px solid #5e125c;}"
    );

    docprint.document.write(" </style>");
    docprint.document.write('</head><body onLoad="self.print()"><center>');
    docprint.document.write(content_vlue);
    docprint.document.write("</center></body></html>");
    docprint.document.close();
    docprint.focus();
  };

  return (
    <div className="printContainer">
      <p>
        <button onClick={print}>Print</button>
      </p>
      <div id="printArea" className="printArea">
        <div className="book">
          <div className="page">
            <div className="pageHeader">
              <div className="leftSection"> LOGO </div>
              <div className="centerSection centerAlign">VISTA BIOMED</div>
              <div className="rightSection rightAlign"> Invoice </div>
            </div>
            <div className="pageBody">
              <div className="invoiceInfo">
                <div className="leftSection">
                  <p className="fieldRow">
                    <label>LIC# : </label>
                    <span className="longLabel">11AB-112-1DE1</span>
                  </p>
                  <p className="fieldRow">
                    <label>DL# : </label>
                    <span className="longLabel">DL-543-872</span>
                  </p>
                  <p className="fieldRow">
                    <label>TRN# : </label>
                    <span className="longLabel">TRN-33-33TRD</span>
                  </p>
                </div>
                <div className="centerSection">
                  <p className="fieldRow">
                    <label>Date : </label>
                    <label>04-18-2020</label>
                  </p>
                  <p className="fieldRow">
                    <label>LPO# : </label>
                    <label>333333</label>
                  </p>
                  <p className="fieldRow">
                    <label>Invoice# : </label>
                    <label>VB/DXB/001/04182020</label>
                  </p>
                </div>
                <div className="rightSection">
                  <p className="fieldRow">
                    <label>Bill To,</label>
                    <span className="newLine">Address</span>
                    <span className="newLine">Street 1</span>
                    <span className="newLine">City, State PIN 690514</span>
                  </p>
                </div>
              </div>
              <div className="itemsSection">
                <div className="invoiceItemHeader">
                  <div className="sNumber">#</div>
                  <div className="productTitle">Product</div>
                  <div className="quantity">Quantity</div>
                  <div className="unitPrice">Unit Price</div>
                  <div className="totalPrice">Total Price</div>
                </div>
                {cartItems &&
                  cartItems.length > 0 &&
                  cartItems.map((p, index) => (
                    <div className="invoiceItem" key={p.product_id}>
                      <div className="itemNumber">{index + 1}</div>
                      <div className="itemTitle">
                        <div className="itemName">
                          {p.product_name}
                          <span className="productCode"> {p.product_code}</span>
                        </div>
                        <span className="productDesc">
                          {p.product_description}
                        </span>
                      </div>
                      <span className="rightAlign">{p.quantity}</span>
                      <span className="rightAlign">{p.product_price}</span>
                      <span className="rightAlign">{p.total_price}</span>
                    </div>
                  ))}
              </div>
              <div className="paymentSection">
                <div className="leftSection">
                  <p className="fieldRow">
                    <span className="longLabel">Payment Method</span>
                    <label></label>
                  </p>
                </div>
                <div className="centerSection">
                  <p className="fieldRow">
                    <label></label>
                    <label></label>
                  </p>
                </div>
                <div className="rightSection rightAlign">
                  <p className="fieldRow">
                    <label>Sub Total : </label>
                    <label>{invoiceInfo.subTotal}</label>
                  </p>
                  <p className="fieldRow">
                    <label>VAT : </label>
                    <label>{invoiceInfo.vat}</label>
                  </p>
                  <p className="fieldRow">
                    <label>Discount : </label>
                    <label>{invoiceInfo.discount}</label>
                  </p>
                  <p className="fieldRow">
                    <label>Grand Total : </label>
                    <label>{invoiceInfo.grandTotal}</label>
                  </p>
                </div>
              </div>
              <div className="signatureSection">
                <p className="fieldRow">
                  <span className="newLine">Signature,</span>
                  <span className="newLine">Thank you.</span>
                </p>
              </div>
            </div>
            <div className="pageFooter">
              <div className="leftSection">
                <span>Phone : 99899899899 </span>
              </div>
              <div className="centerSection centerAlign">
                <span>Email : sales@vistabiomed.com </span>
              </div>
              <div className="rightSection rightAlign">
                <span>www.vistabiomed.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export default PrintInvoice;
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
    invoiceInfo: state.cartReducer.invoiceInfo,
  };
};

const connectedPrintInvoice = connect(mapStateToProps)(PrintInvoice);
export default connectedPrintInvoice;
