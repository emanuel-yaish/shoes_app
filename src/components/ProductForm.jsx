import React from "react";
import CostumInput from "./CostumInput";
import "./ProductForm.css";

class ProductForm extends React.Component {
  state = {
    productImage: "",
    productTitle: "",
    productDescription: "",
    productPrice: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="product-form">
        <h2 className="product-form-title">
          {this.props.formType === "add" ? "Add new product" : "Edit product"}
        </h2>
        <form className="product-form-form">
          <CostumInput
            label="Product Image"
            name="productImage"
            type="text"
            value={this.state.productImage}
            onInputChangeCallBack={this.handleInputChange}
          />

          <CostumInput
            label="Product Title"
            name="productTitle"
            type="text"
            value={this.state.productTitle}
            onInputChangeCallBack={this.handleInputChange}
          />

          <CostumInput
            label="Product Description"
            name="productDescription"
            type="text"
            value={this.state.productDescription}
            onInputChangeCallBack={this.handleInputChange}
          />

          <CostumInput
            label="productPrice"
            name="productPrice"
            type="number"
            value={this.state.productPrice}
            onInputChangeCallBack={this.handleInputChange}
          />
          <button
            className="form-button-action"
            onClick={this.props.formAction}
          >
            {this.props.formType}
          </button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
