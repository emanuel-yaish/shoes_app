import Product from "./Product";

function Products(props) {
  console.log(props.products);
  const getProducts = () => {
    console.log(props.products);
    if (!props.products) {
      return <div>Loding Products</div>;
    } else {
      return props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          deleteShoes={props.deleteShoes}
        />
      ));
    }
  };

  return <div className="products">{getProducts()}</div>;
}

export default Products;
