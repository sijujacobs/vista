import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import { connect } from "react-redux";
import PageA4 from "./PageA4";

import "./css/print.css";

class ComponentToPrint extends React.Component {
  render() {
    const { pages } = this.props;

    return (
      <div className="pageWrapper">
        {pages &&
          pages.length > 0 &&
          pages.map((p, i) => (
            <PageA4
              key={i}
              info={p}
              totalPages={pages.length}
              items={p.items}
            />
          ))}
      </div>
    );
  }
}

const ReactPrint = (props) => {
  const componentRef = useRef();

  const { cartItems } = props;
  let maxCountPerPage = 12;
  let cartItemsCount = cartItems.length;
  let pageNumber = 0;
  let pages = [];
  let tempItems = [];
  for (let i = 0; i < cartItemsCount; i++) {
    let itemCount = i + 1;
    let page = {
      pageNumber: 0,
      info: {},
      items: [],
    };
    tempItems.push(cartItems[i]);
    if (itemCount === maxCountPerPage) {
      page.items = tempItems;
      page.pageNumber = ++pageNumber;
      // console.log("maxItemCount :: pageNumber : ", pageNumber);
      console.log(" :: page : ", page);
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
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} pages={pages} />
    </div>
  );
};
// export default ReactPrint;
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
    invoiceInfo: state.cartReducer.invoiceInfo,
  };
};

const connectedReactPrint = connect(mapStateToProps)(ReactPrint);
export default connectedReactPrint;
