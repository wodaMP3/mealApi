import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Функция для получения рецептов
export const fetchRecipes = async (searchQuery: string = '') => {
  const response = await axios.get(`${BASE_URL}/search.php?s=${searchQuery}`);
  return response.data.meals || [];
};

// Функция для получения рецепта по ID
export const fetchRecipeById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return response.data.meals[0];
};
