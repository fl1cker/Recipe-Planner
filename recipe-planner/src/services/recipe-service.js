import axios from 'axios';
import keys from '../keys';

export const getAllRecipes = async () => {
  const response = await axios.get(
    `https://recipe-planner-app.azurewebsites.net/api/GetAllRecipes?code=${keys.getAllRecipesKey}`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
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
