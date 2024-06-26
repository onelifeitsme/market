import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/ads/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="Categories">
      <div className="CategoryGrid">
        {categories.map((category, index) => (
            <a href={'http://127.0.0.1:8000/ads/cat1/'}>
              <div key={index} className="CategoryCard">
                {category.name}
              </div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;