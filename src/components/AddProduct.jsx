import React from "react";
import "./AddProduct.css";

function AddProduct(props) {
  return (
    <div className="add-product">
      <button className="add-product-button">
        <i className="fas fa-shopping-cart"></i> Add
      </button>
    </div>
  );
}

export default AddProduct;
