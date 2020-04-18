import React from "react";

import "./css/invoice.css";
class PrintInvoice extends React.Component {
  componentDidMount() {
    // console.log(this.ref.innerHTML);
    // console.log(ReactDOM.findDOMNode(this).innerHTML);
  }

  print() {
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
  }

  // .page {
  //   width: 21cm;
  //   min-height: 29.7cm;
  //   padding: 2cm;
  //   margin: 1cm auto;
  //   border: 1px #d3d3d3 solid;
  //   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  // }
  render() {
    return (
      <div className="printContainer">
        <p>
          <button onClick={() => this.print()}>Print 3</button>
        </p>
        <div id="printArea" className="printArea">
          <div className="book">
            <div className="page">
              <div className="pageHeader">
                <div className="leftSection"> LOGO </div>
                <div className="centerSection">VISTA BIOMED</div>
                <div className="rightSection"> Invoice </div>
              </div>
              <div className="pageBody">
                <div className="invoiceInfo">
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
                  <div className="centerSection">
                    <p className="fieldRow">
                      <label>Date</label>
                      <label>333333</label>
                    </p>
                    <p className="fieldRow">
                      <label>LPO #</label>
                      <label>333333</label>
                    </p>
                    <p className="fieldRow">
                      <label>Invoice #</label>
                      <label>333333</label>
                    </p>
                  </div>
                  <div className="rightSection">
                    <p className="fieldRow">
                      <label>Bill To,</label>
                      <label>333333</label>
                    </p>
                  </div>
                </div>
                <div className="itemsSection">Products</div>
                <div className="paymentSection">
                  <div className="leftSection"> Payemnt Method </div>
                  <div className="centerSection">Empty</div>
                  <div className="rightSection"> Total </div>
                </div>
                <div className="signatureSection">Signature Section</div>
              </div>
              <div className="pageFooter">
                <div className="contact">
                  <span>Phone : 99899899899 </span>
                  <span>Email : sales@vistabiomed.com </span>
                  <span>
                    <a href="https://www.vistabiomed.com/">
                      https://www.vistabiomed.com/
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PrintInvoice;
