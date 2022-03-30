import './GenericRecipeForm.css';
import './EditRecipeForm.css';
import React, { useState, useEffect } from 'react';
import RatingSystem from '../../RatingSystem';

import emptyRecipe from '../../models/emptyRecipe';

function EditRecipeForm({ originalRecipe = emptyRecipe }) {
  const [title, setTitle] = useState(originalRecipe.title);
  const [imageSource, setImageSource] = useState(originalRecipe.imageSource);
  const [prepTime, setPrepTime] = useState(originalRecipe.prepTime);
  const [completionTime, setCompletionTime] = useState(
    originalRecipe.completionTime
  );
  const [levelOfEffort, setLevelOfEffort] = useState(
    originalRecipe.levelOfEffort
  );
  const [tasteRating, setTasteRating] = useState(originalRecipe.tasteRating);
  const [sourceType, setSourceType] = useState(
    originalRecipe.recipeSource.sourceType
  );
  const [location, setLocation] = useState(
    originalRecipe.recipeSource.location
  );
  const [details, setDetails] = useState(originalRecipe.recipeSource.details);
  const [ingredients, setIngredients] = useState(originalRecipe.ingredients);

  useEffect(() => {
    console.log('running effect');
    const radioButton = document.getElementById(sourceType);

    if (radioButton) {
      radioButton.checked = true;
    }
  }, [sourceType]);

  let ingredientCounter = 0;

  function handleRemoveIngredientClick(id) {
    console.log(`removing ingredient: ${id}`);
  }

  function handleAddIngredientClick() {
    console.log('adding ingredient');
  }

  function handleRadioClick(e) {
    const selectedOption = document.querySelector(
      'input[name="source"]:checked'
    ).value;

    setSourceType(selectedOption);
  }

  function handleIngredientChange(propertyName, index, event) {
    ingredients.map((ingredient, i) => {
      return index === i
        ? { ...ingredient, [propertyName]: event.target.value }
        : ingredient;
    });
    setIngredients(ingredients);
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="attribute">
          <label htmlFor="details">{secondaryDescription}</label>
          <input
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </>
    );
  }

  return (
    <form className="edit-form">
      <legend>{`Editing ${title}`}</legend>
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
            onClick={handleRadioClick}
          />
          <label htmlFor="book">Book</label>
          <input
            id="website"
            value="website"
            type="radio"
            name="source"
            onClick={handleRadioClick}
          />
          <label htmlFor="website">Website</label>
          <input
            id="recipe-card"
            value="recipe-card"
            type="radio"
            name="source"
            onClick={handleRadioClick}
          />
          <label htmlFor="recipe-card">Recipe Card</label>
          <input
            id="other"
            value="other"
            type="radio"
            name="source"
            onClick={handleRadioClick}
          />

          <label htmlFor="other">Other</label>
        </div>
        <div className="source-details">{renderSourceSwitch()}</div>
      </fieldset>

      <h3>Ingredients</h3>
      <fieldset className="ingredient">
        {ingredients.map((ingredient, index) => {
          return (
            <div className="ingredient-container" key={ingredient.name}>
              <label htmlFor={`ingredient-name${++ingredientCounter}`}>
                Name:
              </label>
              <input
                id={`ingredient-name${ingredientCounter}`}
                value={ingredient.name}
                onChange={(e) => handleIngredientChange('name', index, e)}
              />

              <label htmlFor={`ingredient-amount${ingredientCounter}`}>
                Amount:
              </label>
              <input
                id={`ingredient-amount${ingredientCounter}`}
                value={ingredient.amount}
                onChange={(e) => handleIngredientChange('amount', index, e)}
              />

              <label htmlFor={`ingredient-measurement${ingredientCounter}`}>
                Unit Of Measure:
              </label>
              <select
                id={`ingredient-measurement${ingredientCounter}`}
                onChange={(e) => handleIngredientChange('unit', index, e)}
              >
                <option value="">Default</option>
              </select>
            </div>
          );
        })}
        <i
          className="fa fa-minus"
          onClick={() => handleRemoveIngredientClick(ingredientCounter)}
        ></i>
        <i className="fa fa-plus" onClick={handleAddIngredientClick}></i>
      </fieldset>
    </form>
  );
}

export default EditRecipeForm;
