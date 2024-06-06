import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {/* Добавьте дополнительную информацию о товаре, если это необходимо */}
    </div>
  );
};

export default ProductCard;
