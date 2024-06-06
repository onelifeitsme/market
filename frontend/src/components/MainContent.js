import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$50', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$60', image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 7', price: '$70', image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Product 8', price: '$80', image: 'https://via.placeholder.com/150' },
];

const MainContent = () => {
  return (
    <main className="MainContent">
      <div className="ProductGrid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
