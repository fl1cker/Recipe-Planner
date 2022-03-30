import './RecipeManager.css';
import { useState } from 'react';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';
import { SampleData } from '../../temp/sample-data';

const formOptions = {
  add: 'add',
  edit: 'edit',
};

function RecipeManager() {
  const [formChoice, setFormChoice] = useState(formOptions.add);
  const [selectedRecipeId, setSelectedRecipeId] = useState(-1);
  const [recipes, setRecipes] = useState(SampleData);

  function getRecipeFromId(id) {
    const recipe = recipes.find((x) => x.id == id);

    return recipe;
  }

  function handleAddRecipeClicked() {
    setFormChoice(formOptions.add);
  }

  function handleRecipeSelected(e) {
    const selectedId = e.target.value;
    setSelectedRecipeId(selectedId);

    setFormChoice(formOptions.edit);
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
      <div className="recipe-form">
        {formChoice === formOptions.add ? (
          <AddRecipeForm />
        ) : (
          <EditRecipeForm originalRecipe={getRecipeFromId(selectedRecipeId)} />
        )}
      </div>
    </>
  );
}

export default RecipeManager;
