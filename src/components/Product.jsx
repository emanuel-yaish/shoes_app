import "./Product.css";

function Product(props) {
  if (!props.product) return <div></div>;
  const { name, avatar, description, price, id } = props.product;
  return (
    <div className="product">
      <figure className="product-figure">
        <img className="product-image" src={avatar} alt={name} />
      </figure>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">{price}</div>
        <div className="product-action">
          <button className="product-action-edit">
            <i className="fas fa-edit"></i>Edit
          </button>
          <button
            onClick={() => props.deleteShoes(`/shoes/${id}`, id)}
            className="product-action-remove"
          >
            <i className="fas fa-trash"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
