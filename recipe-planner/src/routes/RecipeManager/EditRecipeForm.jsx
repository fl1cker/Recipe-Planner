import './GenericRecipeForm.css';
import './EditRecipeForm.css';
import RatingSystem from '../../RatingSystem';

const isBook = true;
let ingredientCounter = 0; // set to ingredient.length

function handleRemoveIngredientClick(id) {
  console.log(`removing ingredient: ${id}`);
}

function handleAddIngredientClick() {
  console.log('adding ingredient');
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
          <label htmlFor="prep-time">Preparation Time: (mins)</label>
          <input className="time" id="prep-time" type="number" />
        </div>
        <div className="attribute">
          <label htmlFor="comp-time">Completion Time: (mins)</label>
          <input className="time" id="comp-time" type="number" />
        </div>
        <div className="attribute">
          <label htmlFor="level-of-effort">Level Of Effort:</label>
          <RatingSystem currentRating={0} maxRating={5} />
        </div>
        <div className="attribute">
          <label htmlFor="taste-rating">Taste Rating:</label>
          <RatingSystem currentRating={0} maxRating={5} />
        </div>

        <div className="attribute">
          <label htmlFor="image">Upload An Image:</label>
          <input className="full-width" id="image" />
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="source">Source Radial Buttons:</label>
        <input id="source" />

        {/* if source = website, display website, else if book display book, else  . .  */}

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
