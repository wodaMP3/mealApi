import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipeSlice';
import selectedRecipesReducer from './selectedRecipeSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    selectedRecipes: selectedRecipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
