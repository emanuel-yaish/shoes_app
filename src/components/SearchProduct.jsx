import React from "react";
import "./SearchProduct.css";

function SearchProduct(props) {
  return (
    <div className="search-product">
      <input
        className="search-product-input"
        type="text"
        placeholder="search products"
      />
    </div>
  );
}

export default SearchProduct;
