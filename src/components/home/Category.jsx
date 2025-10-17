import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Category = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  const handleClick = (id) => {
    navigate(`/category/${id}`);
    if (onCategoryClick) {
      onCategoryClick(); // ✅ closes the toggle after category is clicked
    }
  };

  return (
    <div>
      <h1 className='font-bold text-lg sm:text-xl mb-3'>Category News</h1>

      <div className='grid grid-cols-1 gap-2 sm:gap-3'>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleClick(category.id)}
            className='btn btn-outline border-0 text-accent text-sm sm:text-base w-full text-left'
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
