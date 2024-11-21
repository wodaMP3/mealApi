import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../types';

interface SelectedRecipesState {
  selectedRecipes: Recipe[];
}

const initialState: SelectedRecipesState = {
  selectedRecipes: [],
};

const selectedRecipesSlice = createSlice({
  name: 'selectedRecipes',
  initialState,
  reducers: {
    addRecipe(state, action: PayloadAction<Recipe>) {
      if (!state.selectedRecipes.find(recipe => recipe.idMeal === action.payload.idMeal)) {
        state.selectedRecipes.push(action.payload);
      }
    },
    removeRecipe(state, action: PayloadAction<string>) {
      state.selectedRecipes = state.selectedRecipes.filter(recipe => recipe.idMeal !== action.payload);
    },
    clearRecipes(state) {
      state.selectedRecipes = [];
    },
  },
});

export const { addRecipe, removeRecipe, clearRecipes } = selectedRecipesSlice.actions;
export default selectedRecipesSlice.reducer;
