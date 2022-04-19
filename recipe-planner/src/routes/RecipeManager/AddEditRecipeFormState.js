import { useState } from 'react';
import emptyRecipe from '../../models/emptyRecipe';

export default function useAddEditRecipeFormState(recipe = emptyRecipe) {
  const [recipeId, setRecipeId] = useState(recipe.id);
  const [title, setTitle] = useState(recipe.title);
  const [imageSource, setImageSource] = useState(recipe.imageSource);
  const [prepTime, setPrepTime] = useState(recipe.prepTime);
  const [completionTime, setCompletionTime] = useState(recipe.completionTime);
  const [levelOfEffort, setLevelOfEffort] = useState(recipe.levelOfEffort);
  const [tasteRating, setTasteRating] = useState(recipe.tasteRating);
  const [sourceType, setSourceType] = useState(recipe.recipeSource.sourceType);
  const [location, setLocation] = useState(recipe.recipeSource.location);
  const [details, setDetails] = useState(recipe.recipeSource.details);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  function resetAllState() {
    setTitle(recipe.title);
    setImageSource(recipe.imageSource);
    setPrepTime(recipe.prepTime);
    setCompletionTime(recipe.completionTime);
    setLevelOfEffort(recipe.levelOfEffort);
    setTasteRating(recipe.tasteRating);
    setSourceType(recipe.recipeSource.sourceType);
    setLocation(recipe.recipeSource.location);
    setDetails(recipe.recipeSource.details);
    setIngredients(recipe.ingredients);
  }

  function getFinishedRecipe() {
    return {
      id: recipeId,
      title: recipe.title,
      imageSource: recipe.imageSource,
      prepTime: recipe.prepTime,
      completionTime: recipe.completionTime,
      levelOfEffort: recipe.levelOfEffort,
      tasteRating: recipe.tasteRating,
      recipeSource: {
        sourceType: recipe.recipeSource.sourceType,
        location: recipe.recipeSource.location,
        details: recipe.recipeSource.details,
      },
      ingredients: recipe.ingredients,
    };
  }

  return {
    title,
    setTitle,
    imageSource,
    setImageSource,
    prepTime,
    setPrepTime,
    completionTime,
    setCompletionTime,
    levelOfEffort,
    setLevelOfEffort,
    tasteRating,
    setTasteRating,
    sourceType,
    setSourceType,
    location,
    setLocation,
    details,
    setDetails,
    ingredients,
    setIngredients,
    resetAllState,
    getFinishedRecipe,
  };
}
