import React from "react";

import "./css/invoice.css";
class PrintInvoice extends React.Component {
  componentDidMount() {
    // console.log(this.ref.innerHTML);
    // console.log(ReactDOM.findDOMNode(this).innerHTML);
  }

  Print1() {
    var printContents = document.getElementById("printArea").innerHTML;
    console.log(" :: printContents : ", printContents);
    var mywindow = window.open("", "PRINT");
    mywindow.document.write("<html><head></head><body>");
    mywindow.document.write(document.getElementById("printArea").innerHTML);
    mywindow.document.write("</body></html>");

    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  }
  print2() {
    var printContents = document.getElementById("printArea").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.close();
    document.body.innerHTML = originalContents;
  }

  handleClick(e) {
    this.saySomething("element clicked");
  }
  render() {
    return (
      <div className="printContainer">
        <p>
          <button onClick={() => this.Print1()}>Print 1</button>
          <button onClick={() => this.print2()}>Print 2</button>
        </p>
        <div id="printArea" className="printArea" ref={(r) => (this.ref = r)}>
          <div className="pageHeader">
            <div>
              <div className="logoSection"> LOGO </div>
              <div className="titleSection">VISTA BIOMED</div>
            </div>
          </div>

          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
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
    );
  }
}
export default PrintInvoice;
