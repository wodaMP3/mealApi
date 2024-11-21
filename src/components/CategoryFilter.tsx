import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, resetFilter } from '../state/recipeSlice';
import { RootState } from '../state/store';

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.recipes.categories);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      dispatch(resetFilter());
    } else {
      dispatch(filterByCategory(category));
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <button
        onClick={() => handleCategoryChange('All')}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
