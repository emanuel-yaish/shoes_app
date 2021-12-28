import React from "react";
import "./AddProduct.css";

function AddProduct(props) {
  return (
    <div className="add-product">
      <button onClick={props.action} className="add-product-button">
        <i className="fas fa-shopping-cart"></i> Add
      </button>
    </div>
  );
}

export default AddProduct;
