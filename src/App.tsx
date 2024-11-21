import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes } from './state/recipeSlice';
import { fetchRecipes } from './api/mealApi';
import RecipeDetail from './components/RecipeDetails';
import { RootState } from './state/store';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SelectedRecipes from './components/SelectedRecipes';
import Layout from './layout/layout';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.filteredRecipes);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes(); // Загрузить все рецепты
      if (data) {
        dispatch(setRecipes(data));
      }
    };

    loadRecipes();
  }, [dispatch]);

  return (
    <Layout>
    <Routes>
      <Route path="/" element={<RecipeList  recipes={recipes}/>}/>
      <Route path='/recipe/:id' element={<RecipeDetail />}/>
      <Route path="/selected" element={<SelectedRecipes />} />
    </Routes>
    </Layout>
  );
};

export default App;
