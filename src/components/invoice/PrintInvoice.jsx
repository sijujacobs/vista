import React from "react";
import print from "print-js";
class PrintInvoice extends React.Component {
  componentDidMount() {
    console.log(this.ref.innerHTML);
    // console.log(ReactDOM.findDOMNode(this).innerHTML);
  }
  printDiv() {
    var printContents = document.getElementsByClassName("printArea")[0]
      .innerHTML;
    console.log("pp : ", printContents);
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents[0];
    window.print();
    document.body.innerHTML = originalContents;
  }

  //   http://localhost:8880/api/vista/product/read.php.

  handleClick(e) {
    this.saySomething("element clicked");
  }
  render() {
    return (
      <div className="printContainer">
        <h3> Invoice Print Preview </h3>
        <button onClick={() => print("printMe", "html")}>Print</button>
        <button onClick={() => this.printDiv()}>Print Div</button>
        <div id="printMe" className="printArea" ref={(r) => (this.ref = r)}>
          <h3> Vista Bio Med </h3>
          <h4> Vista Bio Med </h4>
          <h4> Vista Bio Med </h4>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <h3> Vista Bio Med </h3>
          <h4> Vista Bio Med </h4>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <p>
            This is used to keep or remove padding and margin from elements that
            are being printed. Sometimes these styling settings are great on
            screen but it looks pretty bad when printing. You can remove it by
            setting this to false.
          </p>
          <h4> Vista Bio Med </h4>
        </div>
        {/* printJS('myElementId', 'html') */}
        <button onClick={() => print("printMe", "html")}>Print</button>
      </div>
    );
  }
}

// const PrintInvoice = (props) => {
//   const printDiv = (divName) => {
//     // var printContents = document.getElementById(divName).innerHTML;
//     // var originalContents = document.body.innerHTML;
//     // document.body.innerHTML = printContents;
//     // window.print();
//     // document.body.innerHTML = originalContents;
//   };

//   return (
//     <div className="container">
//       <h1> do not print this </h1>

//       <div id="printMe" ref={r=>this.ref = r} >Print this only</div>
//       <button onClick={printDiv("printMe")}>Print only the above div</button>
//     </div>
//   );
// };

export default PrintInvoice;
