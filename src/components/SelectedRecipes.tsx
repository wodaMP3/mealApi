import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { clearRecipes, removeRecipe } from '../state/selectedRecipeSlice';
import { Recipe } from '../types'

const SelectedRecipes: React.FC = () => {
  const dispatch = useDispatch();
  const selectedRecipes = useSelector((state: RootState) => state.selectedRecipes.selectedRecipes);

  const handleClearAll = () => {
    dispatch(clearRecipes());
  };

  const handleRemoveRecipe = (id: string) => {
    dispatch(removeRecipe(id));
  };

  const combinedIngredients = selectedRecipes.reduce<Record<string, number>>((acc, recipe) => {
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe] as string | undefined;
      if (ingredient) {
        acc[ingredient] = (acc[ingredient] || 0) + 1;
      }
    }
    return acc;
  }, {});

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Selected Recipes</h1>
      {selectedRecipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes selected.</p>
      ) : (
        <>
          <div className="flex flex-wrap gap-6 justify-start items-start">
            {selectedRecipes.map(recipe => (
              <div
                key={recipe.idMeal}
                className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 truncate">{recipe.strMeal}</h2>
                  <button
                    onClick={() => handleRemoveRecipe(recipe.idMeal)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">Combined Ingredients:</h2>
            <ul className="list-disc ml-6 mt-2">
              {Object.entries(combinedIngredients).map(([ingredient, count]) => (
                <li key={ingredient} className="text-gray-700">
                  {ingredient}: {count}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleClearAll}
            className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default SelectedRecipes;
