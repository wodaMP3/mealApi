import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const Header: React.FC = () => {
  const selectedRecipesCount = useSelector(
    (state: RootState) => state.selectedRecipes.selectedRecipes.length
  );

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-bold">
        <Link to="/" className="hover:underline">
          Recipe App
        </Link>
      </h1>
      <nav>
        <Link
          to="/selected"
          className="text-white hover:underline relative"
        >
          Selected Recipes
          {selectedRecipesCount > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {selectedRecipesCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
