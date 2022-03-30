import './GenericRecipeForm.css';
import './EditRecipeForm.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RatingSystem from '../../RatingSystem';
import { getPropertyName } from '../../helper-functions';
import emptyRecipe from '../../models/emptyRecipe';

function EditRecipeForm({ originalRecipe = emptyRecipe }) {
  const [recipe, setRecipe] = useState(originalRecipe);

  useEffect(() => {
    const radioButton = document.getElementById(recipe.recipeSource.sourceType);

    if (radioButton) {
      radioButton.checked = true;
    }
  }, []);

  let ingredientCounter = 0;

  function handleRemoveIngredientClick(id) {
    console.log(`removing ingredient: ${id}`);
  }

  function handleAddIngredientClick() {
    console.log('adding ingredient');
  }

  function updateRating(topic, starRating) {
    console.log('on topic: ', topic);
    console.log('updating rating to: ', starRating);
  }

  function handleRadioClick(e) {
    const selectedOption = document.querySelector(
      'input[name="source"]:checked'
    ).value;

    //replace recipeType
    const newRecipe = {
      ...recipe,
      recipeSource: {
        ...recipe.recipeSource,
        sourceType: selectedOption,
      },
    };

    console.log(newRecipe);

    setRecipe(newRecipe);
  }

  function renderSourceSwitch() {
    switch (recipe.recipeSource.sourceType.toLocaleLowerCase()) {
      case 'book': {
        return (
          <>
            <div className="attribute">
              <label htmlFor="location">Book Name:</label>
              <input id="location" value={recipe.recipeSource.location} />
            </div>
            <div className="attribute">
              <label htmlFor="details">Page Number:</label>
              <input id="details" value={recipe.recipeSource.details} />
            </div>
          </>
        );
      }
      case 'website': {
        return (
          <>
            <div className="attribute">
              <label htmlFor="location">Url:</label>
              <input id="location" value={recipe.recipeSource.location} />
            </div>
            <div className="attribute">
              <label htmlFor="details">Addition Info (optional):</label>
              <input id="details" value={recipe.recipeSource.details} />
            </div>
          </>
        );
      }
      case 'recipe-card': {
        return (
          <>
            <div className="attribute">
              <label htmlFor="location">Recipe Card Location:</label>
              <input id="location" value={recipe.recipeSource.location} />
            </div>
            <div className="attribute">
              <label htmlFor="details">Addition Info (optional):</label>
              <input id="details" value={recipe.recipeSource.details} />
            </div>
          </>
        );
      }
      default: {
        return (
          <>
            <div className="attribute">
              <label htmlFor="location">Recipe Location:</label>
              <input id="location" value={recipe.recipeSource.location} />
            </div>
            <div className="attribute">
              <label htmlFor="details">Addition Info (optional):</label>
              <input id="details" value={recipe.recipeSource.details} />
            </div>
          </>
        );
      }
    }
  }

  return (
    <form className="edit-form">
      <legend>Editing {recipe.title}</legend>
      <fieldset className="standard-field">
        <div className="attribute">
          <label htmlFor="title">Title:</label>
          <input id="title" value={recipe.title} />
        </div>
        <div className="attribute">
          <label htmlFor="image">Upload An Image:</label>
          <input id="image" type="file" value={recipe.imageSource} />
        </div>
        <div className="attribute">
          <label htmlFor="prep-time">Preparation Time: (mins)</label>
          <input id="prep-time" type="number" value={recipe.prepTime} />
        </div>
        <div className="attribute">
          <label htmlFor="comp-time">Completion Time: (mins)</label>
          <input id="comp-time" type="number" value={recipe.completionTime} />
        </div>
        <div className="attribute rating">
          <label htmlFor="level-of-effort">Level Of Effort:</label>
          <div className="rating-container">
            <RatingSystem
              currentRating={recipe.levelOfEffort}
              maxRating={5}
              isEditable={true}
              updateRating={(newRating) =>
                updateRating(
                  getPropertyName(recipe, (o) => o.levelOfEffort),
                  newRating
                )
              }
            />
          </div>
        </div>
        <div className="attribute">
          <label htmlFor="taste-rating">Taste Rating:</label>
          <div className="rating-container">
            <RatingSystem
              currentRating={recipe.tasteRating}
              maxRating={5}
              isEditable={true}
              updateRating={(newRating) =>
                updateRating(
                  getPropertyName(recipe, (o) => o.tasteRating),
                  newRating
                )
              }
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
