import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getVistaProducts } from "../redux/actions/index";
import Loader from "../components/Loader";
import ProductDetails from "../components/ProductDetails";

const ProductList = (props) => {
  // console.log("ProductList :: props : ", props);
  const [searchResults, setSearchResults] = useState([]);

  const { loading, products, getVistaProducts } = props;

  useEffect(() => {
    getVistaProducts();
  }, [getVistaProducts]);

  const handleChange = (e) => {
    let currentList = [];
    let newList = [];
    let searchKey = e.target.value;
    if (searchKey !== "") {
      currentList = products;
      newList = currentList.filter((item) => {
        const searchQuery = searchKey.toLowerCase();
        return (
          item.product_name.toLowerCase().indexOf(searchQuery) > -1 ||
          item.product_description.toLowerCase().indexOf(searchQuery) > -1 ||
          item.product_code.toLowerCase().indexOf(searchQuery) > -1
        );
        // const lc = item.product_description.toLowerCase();
        // const filter = e.target.value.toLowerCase();
        // return lc.includes(filter);
      });
    }
    setSearchResults(newList);
  };

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
    );
  }
  return renderElement;
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading,
    cartItems: state.cartReducer.cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getVistaProducts: () => dispatch(getVistaProducts()),
  };
};

const connectedProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
export default connectedProductList;
