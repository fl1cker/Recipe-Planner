import './RecipeManager.css';
import React, { useState } from 'react';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';
import { SampleData } from '../../temp/sample-data';
import AddOrEdit from '../../models/AddOrEdit';
import emptyRecipe from '../../models/emptyRecipe';

function RecipeManager() {
  const [addOrEdit, setAddOrEdit] = useState(AddOrEdit.Add);
  const [selectedRecipe, setSelectedRecipe] = useState(emptyRecipe);
  const [recipes, setRecipes] = useState(SampleData);

  const resetRecipeForm = React.useRef(null);

  function getRecipeFromId(id) {
    const recipe = recipes.find((x) => x.id == id);

    return recipe;
  }

  function handleAddRecipeClicked() {
    resetRecipeForm.current();

    setAddOrEdit(AddOrEdit.Add);

    const recipeSelect = document.querySelector('#select-recipe');
    recipeSelect.value = '';
  }

  function handleRecipeSelected(e) {
    const selectedId = e.target.value;
    const newSelectedRecipe = getRecipeFromId(selectedId);

    setSelectedRecipe(newSelectedRecipe);
    setAddOrEdit(AddOrEdit.Edit);
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
      <select id="select-recipe" onChange={handleRecipeSelected}>
        <option value=""></option>
        {recipes.map((recipe) => (
          <option key={recipe.id} value={recipe.id}>
            {recipe.title}
          </option>
        ))}
      </select>
      {addOrEdit === AddOrEdit.Add ? (
        <AddRecipeForm resetRecipeForm={resetRecipeForm} />
      ) : (
        <EditRecipeForm
          key={`edit-recipe-form-${selectedRecipe.id}`}
          resetRecipeForm={resetRecipeForm}
          originalRecipe={selectedRecipe}
        />
      )}
    </>
  );
}

export default RecipeManager;
