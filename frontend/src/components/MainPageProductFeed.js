import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';


const MainPageProductFeed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/ads/popular');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div className="ProductGrid">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default MainPageProductFeed;