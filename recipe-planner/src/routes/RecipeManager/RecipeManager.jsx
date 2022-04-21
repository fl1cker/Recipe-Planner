import './RecipeManager.css';
import { getAllRecipes } from '../../services/recipe-service';
import React, { useState, useEffect } from 'react';
import AddOrEdit from '../../models/AddOrEdit';
import emptyRecipe from '../../models/emptyRecipe';
import AddEditRecipeForm from './AddEditRecipeForm';

function RecipeManager() {
  const [addOrEdit, setAddOrEdit] = useState(AddOrEdit.Add);
  const [selectedRecipe, setSelectedRecipe] = useState(emptyRecipe);
  const [recipes, setRecipes] = useState([]);
  const resetRecipeForm = React.useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes();
      setRecipes(data);
    };

    fetchData().catch(console.error);
  }, []);

  function getRecipeFromId(id) {
    const recipe = recipes.find((x) => x.id === id);

    return recipe;
  }

  function handleAddRecipeClicked() {
    resetRecipeForm.current();

    const recipeSelect = document.querySelector('#select-recipe');
    recipeSelect.value = '';

    handleRecipeSelected(emptyRecipe.id);
    setAddOrEdit(AddOrEdit.Add);
  }

  function handleRecipeSelected(newId) {
    if (!newId) {
      handleAddRecipeClicked();
      return;
    }
    const newSelectedRecipe = getRecipeFromId(newId);

    setSelectedRecipe(newSelectedRecipe);
    setAddOrEdit(AddOrEdit.Edit);
  }

  function handleSaveRecipe(recipe) {
    console.log('saving', recipe);
  }

  function handleDeleteRecipe(id) {
    console.log('deleting Id', id);
  }

  return (
    <>
      <h1>Add, Edit, or Delete Recipes</h1>
      <span>Add A Recipe</span>
      <button onClick={handleAddRecipeClicked}>
        <i className="fa fa-plus"></i>
      </button>
      &nbsp;OR&nbsp;
      <label htmlFor="select-recipe">Choose an Existing Recipe:</label>
      <select
        id="select-recipe"
        onChange={(e) => handleRecipeSelected(e.target.value)}
      >
        <option value=""></option>
        {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.id}>
            {recipe.title}
          </option>
        ))}
      </select>
      <AddEditRecipeForm
        key={`recipe-${addOrEdit}`}
        recipe={selectedRecipe}
        resetRecipeForm={resetRecipeForm}
        addOrEdit={addOrEdit}
        saveRecipe={handleSaveRecipe}
        deleteRecipe={handleDeleteRecipe}
      />
    </>
  );
}

export default RecipeManager;
