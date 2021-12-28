import React from "react";
import "./SearchProduct.css";

function SearchProduct(props) {
  return (
    <div className="search-product">
      <input
        onChange={(e) => props.action(e.target.value)}
        className="search-product-input"
        type="text"
        placeholder="search products"
      />
    </div>
  );
}

export default SearchProduct;
