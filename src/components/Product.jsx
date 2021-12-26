import React from "react";

function Product(props) {
  if (!props.product) return <div></div>;
  const { name, avatar, description, price } = props.product;
  return (
    <div className="product">
      <figure>
        <img src={avatar} alt={name} />
      </figure>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
}

export default Product;
