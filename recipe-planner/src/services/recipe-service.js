import axios from 'axios';
import keys from '../keys';

const functionAppUrl = 'https://recipe-planner-app.azurewebsites.net/api/';
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export const getAllRecipes = async () => {
  const response = await axios.get(
    `${functionAppUrl}GetAllRecipes${keys.getAllRecipesKey}`,
    config
  );

  const recipes = response.data.map((recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      imageSource: recipe.imageSource,
      prepTime: recipe.prepTime,
      completionTime: recipe.completionTime,
      levelOfEffort: recipe.levelOfEffort,
      tasteRating: recipe.tasteRating,
      recipeSource: recipe.recipeSource,
      ingredients: recipe.ingredients,
    };
  });
  return recipes;
};

export const createRecipe = async (recipe) => {
  const body = { ...recipe };

  await axios.post(
    `${functionAppUrl}CreateRecipe${keys.createRecipeKey}`,
    body,
    config
  );
};

export const updateRecipe = async (recipe) => {
  const body = { ...recipe };

  await axios.put(
    `${functionAppUrl}EditRecipe${keys.editRecipeKey}&id=${recipe.id}`,
    body,
    config
  );
};

export const deleteRecipe = async (id) => {
  await axios.delete(
    `${functionAppUrl}DeleteRecipe${keys.deleteRecipeKey}&id=${id}`,
    config
  );
};
