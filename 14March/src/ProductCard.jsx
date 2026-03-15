import React from "react";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <img
        className="product-image"
        src={product.thumbnailUrl}
        alt={product.title}
        loading="lazy"
      />
      <h2 className="product-title">{product.title}</h2>
    </article>
  );
};

export default ProductCard;