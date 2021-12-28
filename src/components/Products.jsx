import Product from "./Product";

function Products(props) {
  const getProducts = () => {
    if (!props.products) {
      return <div>Loading Products</div>;
    } else {
      const filteredProducts = props.products.filter((product) =>
        product.name.toLowerCase().includes(props.keyWord.toLowerCase())
      );
      return filteredProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          deleteShoes={props.deleteShoes}
          editClicked={props.editClicked}
        />
      ));
    }
  };

  return <div className="products">{getProducts()}</div>;
}

export default Products;
