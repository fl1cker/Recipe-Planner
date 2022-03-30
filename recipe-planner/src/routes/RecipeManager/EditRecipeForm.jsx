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

  function renderSourceSwitch() {
    let sourceDescription = '';

    switch (sourceType.toLocaleLowerCase()) {
      case 'book': {
        sourceDescription = 'Book Name';
        break;
      }
      case 'website': {
        sourceDescription = 'Url';
        break;
      }
      case 'recipe-card': {
        sourceDescription = 'Recipe Card Location';
        break;
      }
      default: {
        sourceDescription = 'Recipe Location';
        break;
      }
    }

    return (
      <>
        <div className="attribute">
          <label htmlFor="location">{sourceDescription}</label>
          <input id="location" value={location} onChange={setLocation} />
        </div>
        <div className="attribute">
          <label htmlFor="details">Page Number:</label>
          <input id="details" value={details} onChange={setDetails} />
        </div>
      </>
    );
  }

  return (
    <form className="edit-form">
      <legend>Editing {title}</legend>
      <fieldset className="standard-field">
        <div className="attribute">
          <label htmlFor="title">Title:</label>
          <input id="title" value={title} onChange={setTitle} />
        </div>
        <div className="attribute">
          <label htmlFor="image">Upload An Image:</label>
          <div className="image-source-container">
            <input id="image" type="file" onChange={setImageSource} />
            <span className="display-image-source">{imageSource}</span>
          </div>
        </div>
        <div className="attribute">
          <label htmlFor="prep-time">Preparation Time: (mins)</label>
          <input
            id="prep-time"
            type="number"
            value={prepTime}
            onChange={setPrepTime}
          />
        </div>
        <div className="attribute">
          <label htmlFor="comp-time">Completion Time: (mins)</label>
          <input
            id="comp-time"
            type="number"
            value={completionTime}
            onChange={setCompletionTime}
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
        <label htmlFor={`ingredient-name${++ingredientCounter}`}>Name:</label>
        <input id={`ingredient-name${ingredientCounter}`} />

        <label htmlFor={`ingredient-amount${++ingredientCounter}`}>
          Amount:
        </label>
        <input id={`ingredient-amount${ingredientCounter}`} />

        <label htmlFor={`ingredient-measurement${++ingredientCounter}`}>
          Unit Of Measure:
        </label>
        <input id={`ingredient-measurement${ingredientCounter}`} />
      </fieldset>
      <i
        className="fa fa-minus"
        onClick={() => handleRemoveIngredientClick(ingredientCounter)}
      ></i>
      <i className="fa fa-plus" onClick={handleAddIngredientClick}></i>
    </form>
  );
}

export default EditRecipeForm;
