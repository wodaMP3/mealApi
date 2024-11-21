import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api/mealApi';
import { Recipe } from '../types'

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const loadRecipe = async () => {
      if (id) {
        const data = await fetchRecipeById(id);
        setRecipe(data);
      }
    };

    loadRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">{recipe.strMeal}</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img
          className="w-full h-96 object-cover"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className="p-6">
          <p className="text-lg font-medium text-gray-800 mb-4">
            <span className="font-bold">Category:</span> {recipe.strCategory}
          </p>
          <p className="text-lg font-medium text-gray-800 mb-4">
            <span className="font-bold">Origin:</span> {recipe.strArea}
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Instructions:</h2>
          <p className="text-gray-600 leading-6">{recipe.strInstructions}</p>
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
    </div>
  );
};

export default RecipeDetail;
