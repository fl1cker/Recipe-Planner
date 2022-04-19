import './GenericRecipeForm.css';
import React, { useEffect } from 'react';
import RatingSystem from '../../RatingSystem';
import useAddEditRecipeFormState from './AddEditRecipeFormState';
import AddOrEdit from '../../models/AddOrEdit';
import emptyRecipe from '../../models/emptyRecipe';

function AddEditRecipeForm({
  recipe = emptyRecipe,
  resetRecipeForm,
  addOrEdit,
  deleteRecipe,
  saveRecipe,
}) {
  const {
    recipeId,

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
  } = useAddEditRecipeFormState(recipe);

  useEffect(() => {
    resetRecipeForm.current = resetAllState;
  }, [resetAllState, resetRecipeForm]);

  let ingredientCounter = 0;

  function handleRecipeDeleteClick() {
    deleteRecipe(recipeId);
  }

  function handleRecipeSaveClick() {
    const finishedRecipe = getFinishedRecipe();
    saveRecipe(finishedRecipe);
  }

  function handleAddIngredientClick() {
    let maxId = 99999; // this will have to change.  We are only grabbing the maxId of the ingredients in this recipe, not all recipes.  this will solve itself when this is performed at the DB level

    if (ingredients.length) {
      maxId = ingredients.reduce(
        (max, ingredient) => (ingredient.id > max ? ingredient.id : max),
        ingredients[0].id
      );
    }

    const newIngredient = {
      id: ++maxId,
      name: '',
      amount: 0,
      unit: 'unit',
    };

    ingredients.push(newIngredient);

    setIngredients([...ingredients]);
  }

  function handleIngredientChange(propertyName, id, event) {
    const newIngredients = ingredients.map((ingredient) => {
      return parseInt(id) === ingredient.id
        ? { ...ingredient, [propertyName]: event.target.value }
        : ingredient;
    });
    setIngredients([...newIngredients]);
  }

  function handleDeleteIngredientClick(id) {
    const newIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );

    setIngredients(newIngredients);
  }

  function renderSourceSwitch() {
    let sourceDescription = '';
    let secondaryDescription = '';

    switch (sourceType) {
      case 'book': {
        sourceDescription = 'Book Name';
        secondaryDescription = 'Page Number';
        break;
      }
      case 'website': {
        sourceDescription = 'Url';
        secondaryDescription = 'Additional Info (optional)';
        break;
      }
      case 'recipe-card': {
        sourceDescription = 'Recipe Card Location';
        secondaryDescription = 'Additional Info (optional)';
        break;
      }
      default: {
        sourceDescription = 'Recipe Location';
        secondaryDescription = 'Additional Info (optional)';
        break;
      }
    }

    return (
      <>
        <div className="attribute">
          <label htmlFor="location">{sourceDescription}</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="attribute">
          <label htmlFor="details">{secondaryDescription}</label>
          <input
            id="details"
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </>
    );
  }

  return (
    <form className="recipe-form">
      <div className="legend-wrapper">
        <legend>
          {`${addOrEdit === AddOrEdit.Edit ? 'Editing:' : 'Adding:'} ${
            title ? title : '<new recipe>'
          }`}
        </legend>
        <button
          type="button"
          className="reset-form-button"
          onClick={() => resetAllState()}
        >
          Reset
        </button>
      </div>

      <fieldset className="standard-field">
        <div className="attribute">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="attribute">
          <label htmlFor="image">Upload An Image:</label>
          <div className="image-source-container">
            <input
              id="image"
              type="file"
              onChange={(e) => setImageSource(e.target.value)}
            />
            <span className="display-image-source">{imageSource}</span>
          </div>
        </div>
        <div className="attribute">
          <label htmlFor="prep-time">Preparation Time: (mins)</label>
          <input
            id="prep-time"
            type="number"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
          />
        </div>
        <div className="attribute">
          <label htmlFor="comp-time">Completion Time: (mins)</label>
          <input
            id="comp-time"
            type="number"
            value={completionTime}
            onChange={(e) => setCompletionTime(e.target.value)}
          />
        </div>
        <div className="attribute rating">
          <label htmlFor="level-of-effort">Level Of Effort:</label>
          <div className="rating-container">
            <RatingSystem
              currentRating={levelOfEffort}
              maxRating={5}
              isEditable={true}
              updateRating={setLevelOfEffort}
            />
          </div>
        </div>
        <div className="attribute">
          <label htmlFor="taste-rating">Taste Rating:</label>
          <div className="rating-container">
            <RatingSystem
              currentRating={tasteRating}
              maxRating={5}
              isEditable={true}
              updateRating={setTasteRating}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="recipe-source">
        <h3 className="radio-group-label">Recipe Source:</h3>
        <div className="radio-container">
          <input
            id="book"
            value="book"
            type="radio"
            name="source"
            checked={sourceType === 'book'}
            onChange={() => setSourceType('book')}
          />
          <label htmlFor="book">Book</label>
          <input
            id="website"
            value="website"
            type="radio"
            name="source"
            checked={sourceType === 'website'}
            onChange={() => setSourceType('website')}
          />
          <label htmlFor="website">Website</label>
          <input
            id="recipe-card"
            value="recipe-card"
            type="radio"
            name="source"
            checked={sourceType === 'recipe-card'}
            onChange={() => setSourceType('recipe-card')}
          />
          <label htmlFor="recipe-card">Recipe Card</label>
          <input
            id="other"
            value="other"
            type="radio"
            name="source"
            checked={sourceType === 'other'}
            onChange={() => setSourceType('other')}
          />

          <label htmlFor="other">Other</label>
        </div>
        <div className="source-details">{renderSourceSwitch()}</div>
      </fieldset>

      <fieldset>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient) => {
          return (
            <div className="ingredient-container" key={ingredient.id}>
              <div className="ingredient-name">
                <label htmlFor={`ingredient-name${++ingredientCounter}`}>
                  Name:
                </label>
                <input
                  id={`ingredient-name${ingredientCounter}`}
                  value={ingredient.name}
                  onChange={(e) =>
                    handleIngredientChange('name', ingredient.id, e)
                  }
                />
              </div>
              <div className="ingredient-amount">
                <label htmlFor={`ingredient-amount${ingredientCounter}`}>
                  Amount:
                </label>
                <input
                  id={`ingredient-amount${ingredientCounter}`}
                  value={ingredient.amount}
                  onChange={(e) =>
                    handleIngredientChange('amount', ingredient.id, e)
                  }
                />
              </div>
              <div className="ingredient-unit">
                <label htmlFor={`ingredient-unit${ingredientCounter}`}>
                  Unit Of Measure:
                </label>
                <select
                  id={`ingredient-unit${ingredientCounter}`}
                  onChange={(e) =>
                    handleIngredientChange('unit', ingredient.id, e)
                  }
                >
                  <option value="">Default</option>
                </select>
              </div>
              <div className="ingredient-delete">
                <i
                  className="fa fa-trash"
                  onClick={() => handleDeleteIngredientClick(ingredient.id)}
                ></i>
              </div>
            </div>
          );
        })}
        <i
          className="fa fa-plus ingredient-add"
          onClick={() => handleAddIngredientClick()}
        ></i>
      </fieldset>
      <div className="bottom-buttons">
        <button
          type="button"
          className="delete-button"
          onClick={handleRecipeDeleteClick}
        >
          Delete
        </button>

        <button
          type="button"
          className="save-button"
          onClick={handleRecipeSaveClick}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddEditRecipeForm;
