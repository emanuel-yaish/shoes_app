import React from "react";
import CostumInput from "./CostumInput";
import "./ProductForm.css";

class ProductForm extends React.Component {
  state = {
    productImage: this.props.formData.productImage,
    productTitle: this.props.formData.productTitle,
    productDescription: this.props.formData.productDescription,
    productPrice: this.props.formData.productPrice,
    productId: this.props.formData.productId,
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
            key={this.props.formData.productId}
          />
          <button
            className="form-button-action"
            onClick={(e) => {
              e.preventDefault();
              const term =
                this.props.formType === "add"
                  ? "/shoes"
                  : `/shoes/${this.state.productId}`;

              this.props.formAction(
                term,
                this.state.productImage,
                this.state.productTitle,
                this.state.productDescription,
                this.state.productPrice
              );
            }}
          >
            {this.props.formType}
          </button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
