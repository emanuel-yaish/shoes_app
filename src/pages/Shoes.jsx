import React from "react";
import ShoesApi from "../api/ShoesApi";
import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import SearchProduct from "../components/SearchProduct";
import Products from "../components/Products";
import ProductForm from "../components/ProductForm";
import "./Shoes.css";

class Shoes extends React.Component {
  state = {
    products: null,
    formType: "none",
    formData: null,
    keyWord: "",
  };

  componentDidMount = () => {
    this.getShoes("/shoes");
  };

  editClicked = (id) => {
    this.hideForm();

    const selectedEditItem = this.state.products.find(
      (product) => product.id === id
    );

    this.setState({
      formType: "edit",
      formData: {
        productImage: selectedEditItem.avatar,
        productTitle: selectedEditItem.name,
        productDescription: selectedEditItem.description,
        productPrice: selectedEditItem.price,
        productId: selectedEditItem.id,
      },
    });
  };

  hideForm = () => {
    this.setState({
      formType: "none",
    });
  };

  updateKeyWord = (keyWord) => {
    this.setState({ keyWord: keyWord });
  };

  addItem = () => {
    this.hideForm();
    this.setState({
      formType: "add",
      formData: {
        productImage: "",
        productTitle: "",
        productDescription: "",
        productPrice: "",
        productId: "",
      },
    });
  };

  getShoes = async (term, id) => {
    try {
      const response = await ShoesApi.get(term);
      this.setState({ products: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteShoes = async (term, id) => {
    try {
      const response = await ShoesApi.delete(term);
      console.log("deleted", response);

      const productsAfterDelete = this.state.products.filter(
        (product) => product.id !== id
      );

      this.setState((state) => ({
        products: productsAfterDelete,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  addShoes = async (
    term,
    productImage,
    productTitle,
    productDescription,
    productPrice
  ) => {
    if (
      productImage === "" ||
      productTitle === "" ||
      productDescription === "" ||
      productPrice === ""
    ) {
      return;
    }
    try {
      const response = await ShoesApi.post(term, {
        avatar: productImage,
        name: productTitle,
        description: productDescription,
        price: productPrice,
      });

      const newProductsArray = [...this.state.products, response.data];
      this.setState({ products: newProductsArray, formType: "none" });
    } catch (err) {
      console.log(err);
    }
  };

  editShoes = async (
    term,
    productImage,
    productTitle,
    productDescription,
    productPrice
  ) => {
    if (
      productImage === "" ||
      productTitle === "" ||
      productDescription === "" ||
      productPrice === ""
    ) {
      return;
    }
    try {
      const response = await ShoesApi.put(term, {
        avatar: productImage,
        name: productTitle,
        description: productDescription,
        price: productPrice,
      });

      const index = this.state.products.findIndex((product) => {
        return product.id === response.data.id;
      });

      const updatedProductsArray = [...this.state.products];
      updatedProductsArray[index] = response.data;

      this.setState({ products: updatedProductsArray, formType: "none" });
    } catch (err) {
      console.log(err);
    }
  };

  getForm = () => {
    if (this.state.formType === "none") return;
    return (
      <ProductForm
        key={this.state.formData.productId}
        formType={this.state.formType}
        formData={this.state.formData}
        formAction={
          this.state.formType === "add" ? this.addShoes : this.editShoes
        }
      />
    );
  };

  render() {
    return (
      <div className="shoes">
        <Header />
        <div className="action-bar">
          <AddProduct action={this.addItem} />
          <SearchProduct action={this.updateKeyWord} />
        </div>
        <div className="products-display-area">
          <div className="products-containers">
            <Products
              products={this.state.products}
              deleteShoes={(term, id) => this.deleteShoes(term, id)}
              editClicked={this.editClicked}
              keyWord={this.state.keyWord}
            />
          </div>
          <div className="product-form-container">{this.getForm()}</div>
        </div>
      </div>
    );
  }
}

export default Shoes;
