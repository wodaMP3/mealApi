import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../types';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../state/selectedRecipeSlice';

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Остановить переход на детальную страницу
    dispatch(addRecipe(recipe));
  };

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <img
        className="w-full h-48 object-cover"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-semibold">Category:</span> {recipe.strCategory}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          <span className="font-semibold">Origin:</span> {recipe.strArea}
        </p>
        <button
            onClick={handleAddToSelected}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
            Add to recipes
        </button>
        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Остановить переход на детальную страницу
            className="block mt-4 text-blue-500 font-medium hover:text-blue-700 transition-colors"
          >
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
