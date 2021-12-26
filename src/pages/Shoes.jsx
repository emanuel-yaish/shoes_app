import React from "react";
import ShoesApi from "../api/ShoesApi";
import Header from "../components/Header";
import AddProduct from "../components/AddProduct";
import SearchProduct from "../components/SearchProduct";
import Products from "../components/Products";
import Product from "../components/Product";
import "./Shoes.css";

class Shoes extends React.Component {
  state = { products: null };

  componentDidMount = () => {
    this.getShoes("/shoes");
  };

  getShoes = async (term) => {
    const response = await ShoesApi.get(term);
    console.log(response.data);
    this.setState({ products: response.data });
  };

  render() {
    return (
      <div className="shoes">
        <Header />
        <div className="action-bar">
          <AddProduct />
          <SearchProduct />
        </div>
        <div className="products-containers">
          <Products products={this.state.products} />
        </div>
        <div className="product-container">
          <Product />
        </div>
      </div>
    );
  }
}

export default Shoes;
