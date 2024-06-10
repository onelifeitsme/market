// ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from './Slider';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/ads/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Assuming product.images is an array of image URLs
  const images = [
      'https://wallpaper.forfun.com/fetch/f0/f0a2285506de83d3188b99dc61e3b21b.jpeg?h=900&r=0.5',
      'https://wallpaper.forfun.com/fetch/ad/ad44d3828a12a5945faa3a9668f8c3ea.jpeg?h=900&r=0.5',
      'https://wallpaper.forfun.com/fetch/8f/8fe385c9ab92318b4809cf05dc9b5b3a.jpeg?h=900&r=0.5'
  ];

  return (
    <div className="ProductDetail">
      <div className="slider-container">
        <Slider images={images} />
      </div>
      <div className="product-description">
        <h1>Product Page</h1>
        <p>Product ID: {id}</p>
        {product && (
          <>
            <p>Name: {product.name}</p>
            <p>Phone: {product.phone}</p>
            <p>Email: {product.email}</p>
            <p>Age: {product.age}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
