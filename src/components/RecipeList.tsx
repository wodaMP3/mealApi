import React, { useState } from 'react';
import { Recipe } from '../types'
import RecipeCard from '../components/RecipeCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

  // Определяем диапазон рецептов для текущей страницы
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Recipe List</h1>
      <SearchBar />
      <CategoryFilter />
      <div className="flex flex-wrap gap-6 justify-start items-start">
        {currentRecipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
      {/* Пагинация */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 mx-1 rounded ${
              page === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
