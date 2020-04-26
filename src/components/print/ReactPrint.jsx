import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import { connect } from "react-redux";
import PageA4 from "./PageA4";

import { NavLink } from "react-router-dom";

import "./css/print.css";

class ComponentToPrint extends React.Component {
  render() {
    const { pages, invoiceInfo, appInfo } = this.props;
    return (
      <div className="pageWrapper">
        {pages &&
          pages.length > 0 &&
          pages.map((p, i) => (
            <PageA4
              key={i}
              page={p}
              totalPages={pages.length}
              invoiceInfo={invoiceInfo}
              appInfo={appInfo}
            />
          ))}
      </div>
    );
  }
}

const ReactPrint = (props) => {
  const componentRef = useRef();

  const { invoiceInfo, cartItems, appInfo } = props;
  let maxCountPerPage = 12;
  let cartItemsCount = cartItems.length;
  let pageNumber = 0;
  let pages = [];
  let tempItems = [];
  for (let i = 0; i < cartItemsCount; i++) {
    let itemCount = i + 1;
    let page = {
      pageNumber: 0,
      items: [],
    };
    tempItems.push(cartItems[i]);
    if (itemCount === maxCountPerPage) {
      page.items = tempItems;
      page.pageNumber = ++pageNumber;
      pages.push(page);
      tempItems = [];
    } else if (itemCount === cartItemsCount) {
      page.items = tempItems;
      page.pageNumber = ++pageNumber;
      // console.log("carItemCount :: pageNumber : ", pageNumber);
      pages.push(page);
      tempItems = [];
    }
  }

  return (
    <div>
      <div className="printOption">
        <NavLink to="/invoice" className="linkButton">
          Edit
        </NavLink>
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => componentRef.current}
        />
      </div>
      <ComponentToPrint
        ref={componentRef}
        pages={pages}
        invoiceInfo={invoiceInfo}
        appInfo={appInfo}
      />
    </div>
  );
};
// export default ReactPrint;
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
    invoiceInfo: state.cartReducer.invoiceInfo,
    appInfo: state.appReducer.appInfo,
  };
};

const connectedReactPrint = connect(mapStateToProps)(ReactPrint);
export default connectedReactPrint;
