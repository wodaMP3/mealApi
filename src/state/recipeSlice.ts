import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../types';

interface RecipeState {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  categories: string[]; // Список категорий
}

const initialState: RecipeState = {
  recipes: [],
  filteredRecipes: [],
  categories: [], // Изначально пусто
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
      setRecipes(state, action: PayloadAction<Recipe[]>) {
        state.recipes = action.payload;
        state.filteredRecipes = action.payload;
        state.categories = Array.from(new Set(action.payload.map(recipe => recipe.strCategory)));

      },
      filterByCategory(state, action: PayloadAction<string>) {
        state.filteredRecipes = state.recipes.filter(
          recipe => recipe.strCategory === action.payload
        );
      },
      resetFilter(state) {
        state.filteredRecipes = state.recipes;
      },
      filterBySearch(state, action: PayloadAction<string>) {
        const searchQuery = action.payload.toLowerCase();
        state.filteredRecipes = state.recipes.filter(recipe =>
          recipe.strMeal.toLowerCase().includes(searchQuery)
        );
      },
    },
  });
  
  export const { setRecipes, filterByCategory, resetFilter, filterBySearch } =
    recipesSlice.actions;
  export default recipesSlice.reducer;
  
