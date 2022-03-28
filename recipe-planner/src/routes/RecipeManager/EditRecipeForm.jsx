import './GenericRecipeForm.css';
import './EditRecipeForm.css';
import RatingSystem from '../../RatingSystem';
import { getPropertyName } from '../../helper-functions';

const isBook = true;
let ingredientCounter = 0; // set to ingredient.length

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

function EditRecipeForm({ recipe }) {
  return (
    <form className="edit-form">
      <legend>Editing {recipe.title}</legend>
      <fieldset className="standard-field">
        <div className="attribute">
          <label htmlFor="title">Title:</label>
          <input className="full-width" id="title" />
        </div>
        <div className="attribute">
          <label htmlFor="image">Upload An Image:</label>
          <input className="full-width" id="image" type="file" />
        </div>
        <div className="attribute">
          <label htmlFor="prep-time">Preparation Time: (mins)</label>
          <input className="time" id="prep-time" type="number" />
        </div>
        <div className="attribute">
          <label htmlFor="comp-time">Completion Time: (mins)</label>
          <input className="time" id="comp-time" type="number" />
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
          <input id="book" type="radio" name="source" />
          <label htmlFor="book">Book</label>
          <input id="website" type="radio" name="source" />
          <label htmlFor="website">Website</label>
          <input id="recipe-card" type="radio" name="source" />
          <label htmlFor="recipe-card">Recipe Card</label>
          <input id="other" type="radio" name="source" />
          <label htmlFor="other">Other</label>
        </div>
        {/* if source = website, display website, else if book display book, else  . .  */}
        <div>
          <label htmlFor="location">{isBook ? 'Book Name:' : 'URL:'}</label>
          <input id="location" />

          {isBook ? (
            <>
              <label htmlFor="details">Page Number:</label>
              <input id="details" />
            </>
          ) : (
            ''
          )}
        </div>
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
