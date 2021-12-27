import React from "react";
import ShoesApi from "../api/ShoesApi";
import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import SearchProduct from "../components/SearchProduct";
import Products from "../components/Products";
import ProductForm from "../components/ProductForm";
import "./Shoes.css";

class Shoes extends React.Component {
  state = { products: null };

  componentDidMount = () => {
    this.getShoes("/shoes");
  };

  getShoes = async (term, id) => {
    try {
      const response = await ShoesApi.get(term);
      console.log(response.data);
      this.setState({ products: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteShoes = async (term, id) => {
    try {
      const response = await ShoesApi.delete(term);

      console.log(response);

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
    try {
      const response = await ShoesApi.post(term, {
        avatar: productImage,
        name: productTitle,
        description: productDescription,
        price: productPrice,
      });

      const newProductsArray = [...this.state.products, response.data];
      this.setState({ products: newProductsArray });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="shoes">
        <Header />
        <div className="action-bar">
          <AddProduct />
          <SearchProduct />
        </div>
        <div className="products-display-area">
          <div className="products-containers">
            <Products
              products={this.state.products}
              deleteShoes={(term, id) => this.deleteShoes(term, id)}
            />
          </div>
          <div className="product-form-container">
            <ProductForm formType="add" formAction={this.addShoes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Shoes;
