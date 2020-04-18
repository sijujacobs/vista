import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";
import ProductDetails from "./ProductDetails";

const ProductList = (props) => {
  const { loading, products } = props;
  const [searchResults, setSearchResults] = useState(products);
  useEffect(() => {
    setSearchResults(products);
  }, [products]);

  const handleChange = (e) => {
    let searchKey = e.target.value;
    let filteredProducts = [];
    if (searchKey !== "") {
      filteredProducts = products.filter((item) => {
        let itemContent =
          item.product_name +
          item.product_description +
          item.product_code +
          item.customs_code;

        return itemContent.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
      });
      setSearchResults(filteredProducts);
    }
  };
  // const handleChangeOLD = (e) => {
  //   let currentList = [];
  //   let newList = [];
  //   let searchKey = e.target.value;
  //   if (searchKey !== "") {
  //     currentList = products;
  //     newList = currentList.filter((item) => {
  //       const searchQuery = searchKey.toLowerCase();
  //       return (
  //         item.product_name.toLowerCase().indexOf(searchQuery) > -1 ||
  //         item.product_description.toLowerCase().indexOf(searchQuery) > -1 ||
  //         item.product_code.toLowerCase().indexOf(searchQuery) > -1
  //       );
  //       // const lc = item.product_description.toLowerCase();
  //       // const filter = e.target.value.toLowerCase();
  //       // return lc.includes(filter);
  //     });
  //   }
  //   setSearchResults(newList);
  // };

  // return (
  //   item.product_name.toLowerCase().indexOf(searchKey.toLowerCase()) >
  //     -1 ||
  //   item.product_description
  //     .toLowerCase()
  //     .indexOf(searchKey.toLowerCase()) > -1 ||
  //   item.product_code.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
  // );

  let renderElement = <div>Test</div>;

  if (loading) {
    renderElement = <Loader />;
  } else {
    renderElement = (
      <div className="productList">
        <div className="sectionHeader">Product List</div>
        <div className="searchSection">
          <input
            type="text"
            className="searchInput"
            placeholder="Search..."
            onChange={handleChange}
          />
          <button className="cancelButton">Clear</button>
        </div>
        <div className="scrollArea">
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((p) => (
              <ProductDetails
                key={p.product_id}
                product={p}
                cartItems={props.cartItems}
              />
            ))}
        </div>
      </div>
    );
  }
  return renderElement;
};

// const mapStateToProps = (state) => {
//   return {
//     products: state.productReducer.products,
//     loading: state.productReducer.loading,
//     cartItems: state.cartReducer.cartItems,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getVistaProducts: () => dispatch(getVistaProducts()),
//   };
// };

// const connectedProductList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProductList);
// export default connectedProductList;
export default ProductList;
